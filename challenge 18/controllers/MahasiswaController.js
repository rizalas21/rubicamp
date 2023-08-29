//controllers untuk kontrol
import Mahasiswa from "../models/Mahasiswa.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { findResult, mahasiswaTable } from "../views/MahasiswaViews.js"
import { garis } from '../university.js'
import { rl } from '../connect.js'

export default class MahasiswaController {

    static menu() {
        garis()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Mahasiswa
[2] Cari Mahasiswa
[3] Tambah Mahasiswa
[4] Hapus Mahasiswa
[5] Kembali
        `)
        garis()
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    MahasiswaController.daftar()
                    break;

                case '2':
                    MahasiswaController.cari()
                    break;

                case '3':
                    MahasiswaController.tambah()
                    break;

                case '4':
                    MahasiswaController.hapus()
                    break;

                case '5':
                    menuUtama()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    JurusanController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Mahasiswa.findAll(function (data) {
            mahasiswaTable(data)
            MahasiswaController.menu()
        })
    }

    static cari() {
        rl.question('Masukkan nim Mahasiswa : ', async (kode) => {
            const mahasiswa = await Mahasiswa.cariId(kode);
            if (mahasiswa) {
                findResult(mahasiswa)
                MahasiswaController.menu()
            } else {
                console.log(`Mahasiswa dengan NIM ${kode}, tidak terdaftar`)
                MahasiswaController.menu()
            }
        })
    }

    static async tambah() {
        rl.question('NIM Mahasiswa : ', async (NIM) => {
            rl.question('Nama Mahasiswa : ', async (nama) => {
                rl.question('Tanggal Lahir : ', async (ttl) => {
                    rl.question('Alamat : ', async (alamat) => {
                        rl.question('ID Jurusan : ', async (idjurusan) => {
                            if (await Mahasiswa.cariId(NIM)) {
                                console.log('\n Gagal menambahkan Mahasiswa, Mahasiswa telah terdaftar');
                                MahasiswaController.menu()
                            } else {
                                Mahasiswa.create(NIM, nama, ttl, alamat, idjurusan, function () {
                                    console.log('Mahasiswa telah ditambahkan')
                                    MahasiswaController.daftar()
                                })
                            }
                        })
                    })
                })
            })
        })
    }

    static async hapus() {
        rl.question('Kode Mahasiswa : ', async (kode) => {
            if (await Mahasiswa.cariId(kode)) {
                Mahasiswa.delete(kode)
                console.log('Mahasiswa berhasil dihapus')
                MahasiswaController.daftar()
            } else {
                Mahasiswa.delete(kode, function () {
                    console.log('Mahasiswa gagal dihapus, silahkan coba lagi!')
                    MahasiswaController.menu()
                })
            }
        })
    }
}