import Jurusan from "../models/Jurusan.js"
import { rl } from '../university.js'

export default class JurusanController {

    static menu() {
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
        `)
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    console.log('Daftar Jurusan')
                    break;

                case '2':
                    console.log('Cari Jurusan')
                    break;

                case '3':
                    console.log('Tambah Jurusan')
                    break;

                case '4':
                    console.log('Hapus Jurusan')
                    break;

                case '5':
                    console.log('Kembali')
                    break;

                default:
                    break;
            }
        })
    }

    static daftar() {

    }

    static cari() {

    }

    static tambah() {

    }

    static hapus() {

    }
}