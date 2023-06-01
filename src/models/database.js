const mysql = require('mysql')
class Database {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = '123';
        this.database = 'jav_db';
    }

    connect() {
        console.log('Connected')
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })

    }
}

module.exports = new Database()