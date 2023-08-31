//controllers untuk kontrol
import Matkul from "../models/MataKuliah.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { findResult, showTable } from "../views/MataKuliahViews.js"
import { garis } from '../university.js'
import { rl } from '../connect.js'

export default class MataKuliahController {

    static menu() {
        garis()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Mata Kuliah
[2] Cari Mata Kuliah
[3] Tambah Mata Kuliah
[4] Hapus Mata Kuliah
[5] Kembali
        `)
        garis()
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    MataKuliahController.daftar()
                    break;

                case '2':
                    MataKuliahController.cari()
                    break;

                case '3':
                    MataKuliahController.tambah()
                    break;

                case '4':
                    MataKuliahController.hapus()
                    break;

                case '5':
                    menuUtama()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    MataKuliahController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Matkul.findAll(function (data) {
            showTable(data)
            MataKuliahController.menu()
        })
    }

    static cari() {
        rl.question('Masukkan id Mata Kuliah : ', async (kode) => {
            const matkul = await Matkul.cariId(kode);
            if (matkul) {
                findResult(matkul)
                MataKuliahController.menu()
            } else {
                console.log(`Mata Kuliah Dengan ID ${kode}, tidak terdaftar`)
                MataKuliahController.menu()
            }
        })
    }

    static async tambah() {
        rl.question('Kode Mata Kuliah : ', async (id_mk) => {
            rl.question('Nama Mata kuliah : ', async (nama_mk) => {
                rl.question('SKS Mata Kuliah : ', async (sks) => {
                    if (await Matkul.cariId(id_mk)) {
                        console.log('\n Gagal menambahkan Mata Kuliah, Mata Kuliah telah terdaftar');
                        MataKuliahController.menu()
                    } else {
                        Matkul.create(id_mk, nama_mk, sks, function () {
                            console.log('Mata Kuliah telah ditambahkan')
                            MataKuliahController.daftar()
                        })
                    }
                })
            })
        })

    }
    static async hapus() {
        rl.question('ID Mata Kuliah : ', async (kode) => {
            if (await Matkul.cariId(kode)) {
                Matkul.delete(kode)
                console.log('Mata Kuliah berhasil dihapus')
                MataKuliahController.daftar()
            } else {
                    console.log('Mata Kuliah gagal dihapus, Silahkan coba lagi!')
                    MataKuliahController.menu()
            }
        })
    }
}