const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config.js');
const {signup, signupForm, uploadImage} = require('../controllers/user.controller.js');

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image',uploadImage, ensureAuthenticated);

module.exports = router;