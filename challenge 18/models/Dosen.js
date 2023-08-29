import { db } from "../connect.js";

export default class Dosen{
    constructor(obj) {
        this.nip = obj.nip
        this.nama = obj.nama
    }

    static create(kode, nama, next) {
        db.run('INSERT INTO dosen(nip, nama) VALUES (?, ?)',
         [kode, nama], (err) => {
            if(err) {
                console.log(err)
            }
            next()
        })
    }

    static delete(nip) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM dosen WHERE nip = ?', [nip], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static cariId(nip) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM dosen WHERE nip = ?', [nip], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static findAll(next) {
        let sql = 'SELECT * FROM dosen'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                next(rows)
            }
        })
    }
}