//controllers untuk kontrol
import Kontrak from "../models/Kontrak.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { kontrakTable, showTable, tableDosen, tableMatkul, tablejoin, tablekumplit } from "../views/KontrakViews.js"
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
        Kontrak.kumplit(function (data) {
            tablekumplit(data)
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
        })

    }

    static async tambah() {
        console.log('Lengkapi data di bawah ini : ')
        Kontrak.kumplit(function (data) {
            tablekumplit(data)
            rl.question('masukkan NIM : ', async (nim) => {
                Kontrak.matkul(function (data) {
                    tableMatkul(data)
                    rl.question('Masukkan Kode Mata Kuliah: ', async (id_mk) => {
                        Kontrak.dosen(function (data) {
                            tableDosen(data)
                            rl.question('masukkan NIP Dosen : ', async (nip) => {
                                if (await nim) {
                                    Kontrak.create(nim, id_mk, nip, function () {
                                        console.log('Kontrak telah ditambahkan');
                                        Kontrak.findAll(function (data) {
                                            showTable(data)
                                            KontrakController.menu()
                                        })
                                    })
                                } else {
                                    console.log('\n Gagal menambahkan Kontrak, Kontrak telah terdaftar')
                                    KontrakController.menu()
                                }
                            })
                        })
                    })
                })
            })


        })

    }

    static async hapus() {
        Kontrak.findAll(function (data) {
            showTable(data)
            rl.question('masukkan ID Kontrak : ', async (kode) => {
                let data = await Kontrak.cariKontrak(kode)
                if (data) {
                    Kontrak.delete(kode)
                    console.log('Kontrak berhasil dihapus')
                    KontrakController.menu()
                } else {
                    console.log('Kontrak gagal dihapus, silahkan coba lagi!')
                    KontrakController.menu()
                }
            })
        })
    }

    static async update() {
        Kontrak.findAll(function (data) {
            showTable(data)
            rl.question('Masukkan NIM mahasiswa : ', async (nim) => {
                Kontrak.cariData(nim, function (data) {
                    console.log(`Detail mahasiswa dengan NIM '${nim}' : `)
                    tablejoin(data)
                    garis()
                    rl.question('Masukkan id yang akan dirubah nilainya : ', async (id_kontrak) => {
                        garis()
                        rl.question('Tulis nilai yang baru : ', async (nilai) => {
                            garis()
                            if (await Kontrak.cariNilai(nilai)) {
                                Kontrak.update(nilai, id_kontrak, nim)
                                console.log('nilai telah diupdate')
                                Kontrak.findAll(function (data) {
                                    showTable(data)
                                    KontrakController.menu()
                                })
                            } else {
                                console.log('Gagal mengupdate nilai, Nilai sudah ada, Silahkan coba lagi!')
                                KontrakController.menu()
                            }
                        })
                    })
                })
            })

        })
    }
}