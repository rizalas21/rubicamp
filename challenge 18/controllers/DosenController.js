//controllers untuk kontrol
import Dosen from "../models/Dosen.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { findID, dosenTable } from "../views/DosenViews.js"
import { garis } from '../university.js'
import { rl } from '../connect.js'

export default class DosenController {

    static menu() {
        garis()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
        \n`)
        garis()
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    DosenController.daftar()
                    break;

                case '2':
                    DosenController.cari()
                    break;

                case '3':
                    DosenController.tambah()
                    break;

                case '4':
                    DosenController.hapus()
                    break;

                case '5':
                    menuUtama()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    DosenController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Dosen.findAll(function (data) {
            dosenTable(data)
            DosenController.menu()
        })
    }

    static cari() {
        rl.question('Masukkan nim Dosen : ', async (kode) => {
            const dosen = await Dosen.cariId(kode);
            if (dosen) {
                findID(dosen)
                DosenController.menu()
            } else {
                console.log(`Dosen dengan NIM ${kode}, tidak terdaftar`)
                DosenController.menu()
            }
        })
    }

    static async tambah() {
        rl.question('Masukkan NIP Dosen : ', async (kode) => {
            rl.question('Nama Dosen : ', async (nama) => {
                if (await Dosen.cariId(kode)) {
                    console.log('\n Gagal menambahkan Dosen, Dosen telah terdaftar');
                    DosenController.menu()
                } else {
                    Dosen.create(kode, nama, function () {
                        console.log('Dosen telah ditambahkan')
                        DosenController.daftar()
                    })
                }
            })
        })

    }

    static async hapus() {
        rl.question('Kode Dosen : ', async (kode) => {
            if (await Dosen.cariId(kode)) {
                Dosen.delete(kode)
                console.log('Dosen berhasil dihapus')
                DosenController.daftar()
            } else {
                console.log('Dosen gagal dihapus, Silahkan coba lagi!')
            }
        })
    }
}