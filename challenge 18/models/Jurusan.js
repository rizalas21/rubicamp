import {db} from '../connect.js'


export default class Jurusan {
    constructor(obj) {
        this.id_jurusan = obj.id_jurusan
        this.nama_jurusan = obj.nama_jurusan
    }

    save(next) {  //create //prototype //cara pakainya harus pakai new dulu
        db.run('INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES (?, ?)', [this.id_jurusan, this.nama_jurusan], (err) => {
            if(err) {
                console.log(err);
            }
            next()
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM jurusan'
        db.all(sql, (err, rows) => {
            if(err) {
                console.log(err);
            }
            next(rows)
        })
    }

    static create() { //cara pakainya langsung Jurusan.create

    }

    static read() {

    }

    
}