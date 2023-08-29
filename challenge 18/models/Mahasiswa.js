import { db } from '../connect.js'

export default class Mahasiswa {
    constructor(obj) {
        this.nim = obj.nim
        this.nama = obj.nama
        this.tanggal_lahir = obj.tanggal_lahir
        this.alamat = obj.alamat
        this.id_jurusan = obj.id_jurusan
    }


    static create(nim, nama, tanggal_lahir, alamat, id_jurusan, next) {  //create //prototype //cara pakainya harus pakai new dulu
        db.run('INSERT INTO mahasiswa (nim, nama, tanggal_lahir, alamat, id_jurusan) VALUES (?, ?, ?, ?, ?)', 
        [nim, nama, tanggal_lahir, alamat, id_jurusan], (err) => {
            if (err) {
                console.log(err);
            }
            next()
        })
    }

    static findAll(next) {
        let sql = 'SELECT mahasiswa.*, jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan;'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                next(rows)
            }
        })
    }

    static cariId(nim) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT mahasiswa.* , jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan WHERE nim = ?', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static delete(nim) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}