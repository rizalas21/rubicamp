//controllers untuk kontrol
import Kontrak from "../models/Kontrak.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { kontrakTable, showTable } from "../views/KontrakViews.js"
import { garis } from '../university.js'
import { rl } from '../connect.js'

export default class KontrakController {

    static menu() {
        garis()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Update Kontrak
[6] Kembali
        `)
        garis()
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    KontrakController.daftar()
                    break;

                case '2':
                    KontrakController.cari()
                    break;

                case '3':
                    KontrakController.tambah()
                    break;

                case '4':
                    KontrakController.hapus()
                    break;

                case '5':
                    KontrakController.update()
                    break;

                case '6':
                    menuUtama()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    KontrakController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Kontrak.findAll(function (data) {
            showTable(data)
            KontrakController.menu()
        })
    }

    static cari() {
        rl.question('Masukkan NIM Mahasiswa : ', async (nim) => {
            const kontrak = await Kontrak.cariNim(nim);
            console.log(`Daftar Kontrak Mahasiswa Dengan NIM ${nim} adalah : `)
            if (kontrak) {
                kontrakTable(kontrak)
                KontrakController.menu()
            } else {
                console.log(`Kontrak dengan NIM ${nim}, tidak terdaftar`)
                KontrakController.menu()
            }
        })
    }

    static async tambah() {
        rl.question('NIM Mahasiswa : ', async (nim) => {
            rl.question('NIP Dosen : ', async (nip) => {
                rl.question('ID Matkul : ', async (id_mk) => {
                    if (await Kontrak.cariId(nim)) {
                        Kontrak.create(nim, nip, id_mk, function () {
                            console.log('Kontrak telah ditambahkan');
                        })
                        KontrakController.daftar()
                        KontrakController.menu()
                    } else {
                        console.log('\n Gagal menambahkan Kontrak, Kontrak telah terdaftar')
                        KontrakController.menu()
                    }
                })
            })
        })
    }

    static async hapus() {
        rl.question('masukkan NIM : ', async (kode) => {
            if (await Kontrak.cariId(kode)) {
                Kontrak.delete(kode)
                console.log('Kontrak berhasil dihapus')
                KontrakController.daftar()
            } else {
                Kontrak.delete(kode, function () {
                    console.log('Mahasiswa gagal dihapus, silahkan coba lagi!')
                    KontrakController.menu()
                })
            }
        })
    }

    static async update() {
        rl.question()
    }
}