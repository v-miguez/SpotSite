var express = require('express');
var router = express.Router();
const userModel = require('../../models/userModel')
const utils = require('../../utils')
router.get('/', (req, res)=>{

	console.log('get conseguido')
	res.send('HOLA')
})


router.post('/login', (req, res)=>{
	userModel.userExist(req.body.alias, (err, rows)=>{
		if(err) return res.send('error en el nombre')
			if(rows.length !== 1){
				res.json({ error: 'No existe el usuario' })
			}else{
				userModel.userLogin(req.body, (err, rows)=>{
					token = {'token': utils.generarToken()}
					if(err) return console.log(err)
						res.json(token)
				})
			}

		})
})




module.exports = router;
