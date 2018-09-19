const db = require('../db')


exports.getAll = (done)=>{
	db.get().query('select zonas.id, zonas.nombre, zonas.ciudad, zonas.barrio, zonas.lat, zonas.lng, zonas.direccion, GROUP_CONCAT(imagenesZonas.src) as imagenes  FROM zonas, imagenesZonas WHERE zonas.id = imagenesZonas.idZona GROUP BY zonas.id, zonas.nombre, zonas.ciudad, zonas.barrio, zonas.lat, zonas.lng, zonas.direccion', (err, rows)=>{
		if(err) return done(err)
		done(null, rows)
	})
}


exports.getById = (id, done)=>{

	db.get().query('SELECT zonas.*, GROUP_CONCAT(imagenesZonas.src) as src  FROM zonas, imagenesZonas WHERE zonas.id = ? AND zonas.id = imagenesZonas.idZona', [id], (err, rows)=>{
		if(err) return done(err)
		console.log(rows)
		done(null, rows)
	})

}

exports.getByNombre = (ciudad, done)=>{
	db.get().query('select zonas.id, zonas.nombre, zonas.ciudad, zonas.direccion, zonas.barrio, zonas.lat, zonas.lng, GROUP_CONCAT(imagenesZonas.src) as imagenes  FROM zonas, imagenesZonas WHERE zonas.id = imagenesZonas.idZona AND zonas.ciudad = ? GROUP BY zonas.id, zonas.nombre, zonas.ciudad, zonas.barrio, zonas.lat, zonas.lng, zonas.direccion', [ciudad], (err, rows)=>{
		if(err) return done(err)
		console.log(rows)
		done(null, rows)
	})

}

exports.nuevaZona = ({nombre, direccion, barrio, ciudad, src, idUser},done)=>{
	db.get().query('INSERT INTO zonas VALUES (null, ?,  ?, ?, ?,null, null, ?)', [nombre, direccion,barrio, ciudad, idUser],(err, rows)=>{

		if(err) return done(err)
		done(null, rows)

	})


}

exports.insertarImagen = ({src, alt, idZona}, done)=>{

	db.get().query('INSERT INTO imagenesZonas VALUES (null, ?,?,?)', [src, alt, idZona], (err, rows)=>{

		if(err) return done(err)
		done(null, rows)

	})

}

exports.postComment= ({comentario, idUser, id}, done) =>{
	console.log(comentario, idUser, id)

	db.get().query('INSERT INTO comentarios VALUES (null, ?, ?, ?) ', [comentario, idUser, id], (err, rows)=>{

		if(err) return done(err)
			done(null,rows)

	} )

}

exports.getComments = ( idZona, done) =>{

	db.get().query('select comentarios.*, users.alias, users.ciudad, users.imagen FROM comentarios, users WHERE comentarios.idZona = ? AND comentarios.`idUser` = users.`id`', [idZona], (err, rows)=>{

		if(err) return done(err)
			done(null, rows)

	})

}

exports.borrarComentario= (id, done)=>{
	console.log('borrar comentario', id)
	db.get().query('DELETE FROM comentarios WHERE id = ?', [id], (err, rows)=>{

		if(err)console.log(err)
			done(null, rows)

	})

}


exports.byUser = (token, done) =>{
	db.get().query('select zonas.nombre,  GROUP_CONCAT(imagenesZonas.src) as imagen from zonas, users, imagenesZonas where users.id = zonas.idUser AND users.token= ? AND imagenesZonas.`idZona` = zonas.id GROUP BY zonas.nombre', [token], (err, rows)=>{

		if(err) console.log(err)
		done(null, rows)

	})
}
