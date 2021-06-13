module.exports = (app) => {
    const post= require('../controllers/posts.controller');
    const router = require('express').Router();
    const verify = require('../controllers/verifyToken.controller');
    
    router.get('/', verify, post.getData);
    app.use('/api/posts', router);
  }