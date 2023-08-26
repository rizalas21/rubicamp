// models database
import { db } from '../connect.js'

export default class Jurusan {
    constructor(obj) {
        this.id_jurusan = obj.id_jurusan
        this.nama_jurusan = obj.nama_jurusan
    }

    save(next) {  //create //prototype //cara pakainya harus pakai new dulu
        db.run('INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES (?, ?)', [this.id_jurusan, this.nama_jurusan], (err) => {
            if (err) {
                console.log(err);
            }
            next()
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM jurusan'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                next(rows)
            }
        })
    }

    static create(kode, nama, next) { //cara pakainya langsung Jurusan.create
        db.run('INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES (?, ?)', [kode, nama], (err) => {
            if (err) {
                console.log(err);
            }
            next()
        })
    }

    static cariId(id_jurusan) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM jurusan WHERE id_jurusan = ?', [id_jurusan], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static delete(id_jurusan) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM jurusan WHERE id_jurusan = ?', [id_jurusan], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}