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
					console.log(rows[0].alias)
					let tokenStr = utils.generarToken()
					let id = req.body.id
					let alias = req.body.alias
					if(err) return console.log(err)
						userModel.actualizarToken({tokenStr, id}, (err, rows)=>{
							if(err) return console.log(err)
								console.log(rows)
						})
					res.json({token: tokenStr,alias: alias})
				})
			}

		})
})




module.exports = router;
