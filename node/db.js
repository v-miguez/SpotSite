const mysql = require('mysql')

let pool = null

exports.connect = (done)=>{

	pool = mysql.createPool({
		
		// ----LOCAL-------
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'spotsite',
		port: 8889
		// //----PRODUCCION----
		// host: 'eu-cdbr-west-02.cleardb.net',
		// user: 'baef59ad5005ab',
		// password: 'fc08666b',
		// database: 'heroku_4a35ac730d83855',
		// port: 3306

	})
	done()
}


exports.get = () => {

	return pool

}
