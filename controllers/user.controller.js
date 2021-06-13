const db = require('../models');
const User = db.users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation/auth.validation');



exports.register = async (req, res) => {

  //Check validation
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Check if the user has already in DB
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('Email Already Exists');

  //Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  await user.save(user)
  .then((result) => {
    res.send({ user: result._id});
  }).catch((err) => {
    res.status(409).send({
        message: error.message || "Some error while Register"
    });
  });
};

exports.login = async (req, res) => {
  //Check validation
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Check if the email exists
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('Email doesnt exists!');
  
  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid password');

  // Create and assign a token 
  const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN,{ expiresIn: "120s"});
  res.header('auth-token', token).send(token);
}