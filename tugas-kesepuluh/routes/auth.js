const {Router} = require('express');
const { register, login, data, logout, open } = require('../controllers/authController');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/register', register)

router.post('/login', login)

router.get('/logout', logout)

router.get('/data', auth, data)

router.get('/open', open)

module.exports = router;