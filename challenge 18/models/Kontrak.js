import { db } from '../connect.js'

export default class Kontrak {
    constructor(obj) {
        this.nim = obj.nim
        this.nip = obj.nip
        this.id_mk = obj.id_mk
    }


    static create(nim, id_mk, nip, next) {  //create //prototype //cara pakainya harus pakai new dulu
        db.run('INSERT INTO kontrak (nim, id_mk, nip) VALUES (?, ?, ?)',
            [nim, id_mk, nip], (err) => {
                if (err) {
                    console.log(err);
                }
                next()
            })
    }


    static kumplit(next) {
        db.all('SELECT * from mahasiswa LEFT JOIN jurusan USING(id_jurusan)', (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                next(rows)
            }
        })
    }

    static matkul(next) {
        db.all('SELECT * FROM mata_kuliah', (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                next(rows)
            }
        })
    }

    static dosen(next) {
        db.all('SELECT * FROM dosen', (err, rows) => {
            if (err) {
                console.log(err)
            } else {
                next(rows)
            }
        })
    }

    static findAll(next) {
        let sql = 'SELECT id_kontrak, kontrak.nim, mahasiswa.nama, nama_mk, nama_dosen, kontrak.nilai FROM kontrak LEFT JOIN mahasiswa USING (nim) LEFT JOIN mata_kuliah USING (id_mk) LEFT JOIN dosen USING (nip)'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                next(rows)
            }
        })
    }

    static cariId(id) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM kontrak WHERE nim = ?', [id], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static cariKontrak(id_kontrak) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM kontrak WHERE id_kontrak = ?', [id_kontrak], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static cariKontrak(nilai) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM kontrak WHERE nilai = ?', [nilai], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }



    static cariNim(nim) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM kontrak WHERE nim = ?', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static delete(id_kontrak) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM kontrak WHERE id_kontrak = ?', [id_kontrak], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }


    static update(nilai, id_kontrak, nim) {
        return new Promise(function (resolve, reject) {
            db.run('UPDATE kontrak SET nilai = ? WHERE id_kontrak = ? AND nim = ?', [nilai, id_kontrak, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static cariData(nim, next) {
        db.all('SELECT kontrak.id_kontrak, mata_kuliah.nama_mk, kontrak.nilai FROM kontrak LEFT JOIN mata_kuliah USING (id_mk) WHERE kontrak.nim = ?', [nim], (err, data) => {
            if (err) console.log(err)
            else next(data)
        })
    }

    static tampilData(nim) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT kontrak.id_kontrak, mata_kuliah.nama_mk, kontrak.nilai FROM kontrak LEFT JOIN mata_kuliah USING (id_mk)', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

}