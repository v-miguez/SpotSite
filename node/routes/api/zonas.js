var express = require('express');
var router = express.Router();

const zonasmodel = require('../../models/zonasmodel')
const usermodel = require('../../models/usermodel')
const utils = require('../../utils')
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const fs = require('fs')
router.get('/', (req, res)=>{

	zonasmodel.getAll((err, rows)=>{
		
		if(err) res.send(err)
			res.json(rows)

	})
	
})


router.get('/:id', (req, res)=>{

	zonasmodel.getById(req.params.id, (err, rows)=>{

		if(err) res.send(err)
			res.json(rows)

	})
})

router.post('/new-comment', (req, res)=>{
		let zona = req.body

	usermodel.getUserByToken(req.body.token.token, (err,result)=>{
		let idUser = result[0].id
		zona.idUser = idUser
		console.log(zona)
		delete zona.token
		console.log(zona)
		
		zonasmodel.postComment(zona, (err, rows)=>{
			console.log(rows)
			if(err) console.log(err)
			res.json(rows)
		})
	})

})

router.get('/ciudad/:nombre', (req, res)=>{
	
	zonasmodel.getByNombre(req.params.nombre, (err, rows)=>{

		if(err) res.send(err)
		
		res.json(rows)

		})
})


// http://localhost:3000/api/zonas/comments
router.get('/comments/:id', (req, res)=>{

	zonasmodel.getComments(req.params.id, (err, rows)=>{

		if(err) console.log(err)
			res.json(rows)
	})

})


router.post('/new', multipartMiddleware,(req, res)=>{
	// console.log(req.files.imagen.path)
	let content = fs.readFileSync(req.files.imagen.path)
	let tokenStr = utils.generarToken()
	console.log('el token es ', tokenStr)
	let path = `${__dirname}/../../public/images/${tokenStr}.png`
	fs.writeFileSync(path, content)
	let zona = req.body
	zonasmodel.nuevaZona(zona, (err, rows)=>{
		if(err) res.send(err)
			let imagen = {alt: zona.nombre, src: `${tokenStr}.png`, idZona: rows.insertId}
		zonasmodel.insertarImagen(imagen, (err, rows)=>{

			if(err) res.send(err)
				res.send(rows)

		})

	})
})

// http://localhost:3000/api/zonas/comentario/borrar
router.post('/comentario/borrar',(req, res)=>{
	
	zonasmodel.borrarComentario(req.body.id , (err, result)=>{
		if(err) console.log(err)
		console.log(result)
		res.json('ok')

	})

})


router.post('/user', (req, res)=>{
	zonasmodel.byUser(req.body.token, (err, rows)=>{

		if(err) console.log(err)
		res.json(rows)

	})
})

module.exports = router;
