const mysql = require('mysql')

let pool = null

exports.connect = (done)=>{

	pool = mysql.createPool({

		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'spotsite',
		port: 8889

	})
	done()
}


exports.get = () => {

	return pool

}
