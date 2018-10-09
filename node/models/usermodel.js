
// modelo de alumnos, se encarga de las funciones que realizar sobre la tabl alumno

const db = require('../db')

// este fichero contiene todas las funciones para trabajar con la tabla alumnos

exports.userExist = (alias, done)=>{

	db.get().query('SELECT * FROM users WHERE alias = ?', [alias], (err, rows) =>{

		if(err) return done(err)
			done(null, rows)

	})

}


exports.userLogin = ({alias, password}, done)=>{
	db.get().query('SELECT * FROM users WHERE alias = ? AND password = ?', [alias, password], (err, rows)=>{

		if(err) return done(err)
			done(null, rows)
	})
}

exports.actualizarToken = ({token, id}, done)=>{
	
	let q = `UPDATE users SET token='${token}' WHERE id=${id}`
	console.log(q)
	db.get().query(q, (err, rows)=>{

		if(err) return done(err)
		done(null, rows)

	})

}

exports.crearUser = ({nombre=null, apellido=null, alias, email, password}, done)=>{
	db.get().query('INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, "default.jpg" ,null,null)', [nombre, apellido, alias, email, password], (err, rows)=>{
		if(err) return done(err)
		done(null, rows)
	})
	
}


exports.getUserByToken = (userToken, done)=>{

 	db.get().query('SELECT * FROM users WHERE token = ?', [userToken], (err, rows)=>{
		if(err) return done(err)
		done(null, rows)

	})

}



exports.newPass = ({password, newPass, token}, done) =>{
	console.log(password, newPass, token)
	db.get().query('UPDATE users SET password = ? WHERE token = ? AND password = ?',[newPass, token, password],(err, rows)=>{
		if(err)return done(err)
		done(null)

	})
	
}