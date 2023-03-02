const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config.js');
const {signup, signupForm, uploadImage, displayProfile} = require('../controllers/user.controller.js');

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image',uploadImage, ensureAuthenticated);
router.get('/:username', ensureAuthenticated, displayProfile)

module.exports = router;