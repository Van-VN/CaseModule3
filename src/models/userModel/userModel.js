const Database = require('../database')

class UserModel {
    constructor() {
        this.connection = Database.connect()
    }

    showUser() {
        return new Promise(((resolve, reject) => {
            let sql = `call showActors()`
            this.connection.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }

            })
        }))
    }

    findByName(id){
        return new Promise(((resolve, reject) => {
            let sql = `select * from actors where id = ${id}`
            this.connection.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }

            })
        }))
    }
}

module.exports = new UserModel()
