
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

	db.get().query('UPDATE users SET token = ? WHERE id = ?', [token, id], (err, rows)=>{

		if(err) return done(err)
		done(null, rows)

	})

}
