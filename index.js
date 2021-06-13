const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//connect DB
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then((result) => {
    console.log(`Database Connected!`);
  })
  .catch((err) => {
    console.log(`Cannot Connect to the Database!`, err);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({
      message: "Welcome to our App"
  });
});

require('./routes/auth.routes')(app);
require('./routes/posts.routes')(app);

app.listen(3000, () => {console.log('Server has been Running!')});