// models database
import { db } from '../connect.js'

export default class Matkul {
    constructor(obj) {
        this.id_mk = obj.id_mk
        this.nama_mk = obj.nama_mk
    }

    static findAll(next) {
        let sql = 'SELECT * FROM mata_kuliah'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                next(rows)
            }
        })
    }

    static create(id_mk, nama_mk, sks, next) { //cara pakainya langsung mk.create
        db.run('INSERT INTO mata_kuliah (id_mk, nama_mk, sks) VALUES (?, ?, ?)', [id_mk, nama_mk, sks], (err) => {
            if (err) {
                console.log(err);
            }
            next()
        })
    }

    static cariId(id_mk) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM mata_kuliah WHERE id_mk = ?', [id_mk], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static delete(id_mk) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM mata_kuliah WHERE id_mk = ?', [id_mk], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}