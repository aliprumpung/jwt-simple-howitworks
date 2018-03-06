
	var express = require('express');
	var router = express.Router();
	const Checkauth = require('./middleware/check-auth');
	const UsersController = require('../controllers/users');

	//GET http://localhost:3000/checkauth?token= <Your_Token here>

	router.get('/', UsersController.users_get_token);
	router.post('/', UsersController.users_post_token);
	router.get('/checkauth',Checkauth.noHeader, UsersController.users__AuthResult);
	router.post('/checkauth', Checkauth.usingHeader, UsersController.users__AuthResult);




	module.exports = router;
