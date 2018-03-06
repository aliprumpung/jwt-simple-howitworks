	require('dotenv').config();
	var jwt = require('jsonwebtoken');

	exports.users_get_token = (req, res, next)=> {

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
	}

	exports.users_post_token = (req,res,next)=>{
	console.log(req.body);
	const email = req.body.email;
	const userId = req.body.userId;
	
	const token = jwt.sign({email:email,userId:userId,ket:'hamil'},process.env.JWT_KEY,{expiresIn:'1d'});
	return res.status(200).json({
	message: 'Auth successful',
	token: token
	});

	}
	exports.users__AuthResult =  (req, res, next)=> {
	return res.status(409).json({
	message: '',
	data: req.userData
	});
	}