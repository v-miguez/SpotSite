var express = require('express');
var router = express.Router();
const userModel = require('../../models/usermodel')
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
					if(err || rows.length == 0)
						{ console.log(err)}
					else{
						let tokenStr = utils.generarToken()
						let id = rows[0].id
						let alias = req.body.alias
						console.log(tokenStr)
						if(err) return console.log(err)
							userModel.actualizarToken({token: tokenStr, id: id}, (err, rows)=>{
								if(err) return console.log(err)
									console.log(rows)
							})
						res.json({token: tokenStr,alias: alias})
					}
				})
			}

		})
})

router.post('/new', (req, res)=>{
	userModel.crearUser(req.body, (err,rows)=>{
		if(err) console.log(err)
			res.json(rows)
	})
})



router.post('/getByToken', (req, res)=>{
	userModel.getUserByToken(req.body.token, (err, rows)=>{
		if(err) console.log(err)
			res.json(rows)
	})

})

router.post('/cambioPass', (req, res)=>{
	
	userModel.newPass(req.body, (err, rows)=>{
		res.json(rows)
	})

})

module.exports = router;
