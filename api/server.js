	require('dotenv').config();
	var express = require('express');
	var router = express.Router();
	var jwt = require('jsonwebtoken');
	const checkauth_usingHeader = require('./middleware/check-auth');

	//GET http://localhost:3000/checkauth?token= <Your_Token here>


	router.get('/', (req, res, next)=> {

	const token = jwt.sign({
	email: 'helloworld@gmail.com',
	userId: '909279373'
	},process.env.JWT_KEY,
	{
	expiresIn: '1h'
	});
	return res.status(200).json({
	message: 'Auth successful',
	token: token
	});

	});


	router.post('/',(req,res,next)=>{

	const email = req.body.username;
	const userId = req.body.userId;
	const token = jwt.sign({email:email,userId:userId},process.env.JWT_KEY,{expiresIn:'1d'});
	return res.status(200).json({
	message: 'Auth successful',
	token: token
	});

	});

	router.get('/checkauth',checkAuth, (req, res, next)=> {
	return res.status(409).json({
	message: '',
	data: req.userData
	});
	});
	router.post('/checkauth',checkauth_usingHeader, (req, res, next)=> {
	return res.status(409).json({
	message: 'Auth successful',
	data: req.userData
	});
	});




	function checkAuth(req,res,next){
	try{

	const decode = jwt.verify(req.query.token, process.env.JWT_KEY);
	req.userData = decode;
	console.log(decode);
	next();

	}catch (error){

	return res.status(401).json({message: 'Authentication failed'});
	console.log('err');
	}
	};


	router.get('/:id',(req,res,next)=>{


	res.send(decode);
	});


	module.exports = router;
