//controllers untuk kontrol
import Jurusan from "../models/Jurusan.js"
import { menuUtama } from '../university.js' //rl pindah ke views JurusanViews.js
import { findResult, showTable } from "../views/JurusanViews.js"
import { garis } from '../university.js'
import { rl } from '../connect.js'

export default class JurusanController {

    static menu() {
        garis()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
        `)
        garis()
        rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    JurusanController.daftar()
                    break;

                case '2':
                    JurusanController.cari()
                    break;

                case '3':
                    JurusanController.tambah()
                    break;

                case '4':
                    JurusanController.hapus()
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
        Jurusan.find(function(data) {
            showTable(data)
            JurusanController.menu()
        })
    }

    static cari() {
        rl.question('Masukkan id Jurusan Disini : ', async(kode) => {
            const jurusan = await Jurusan.cariId(kode);
            if(jurusan) {
                findResult(jurusan)
                JurusanController.menu()
            } else {
                console.log(`Jurusan dengan id ${kode}, tidak terdaftar`)
                JurusanController.menu()
            }
        })
    }

    static async tambah() {
            rl.question('Kode Jurusan : ', async (kode) => {
                rl.question('Nama Jurusan : ', async (nama) => {
                    if(await Jurusan.cariId(kode)) {
                        console.log('\n Gagal menambahkan jurusan, jurusan telah terdaftar');
                        JurusanController.menu()
                    } else {
                        Jurusan.create(kode, nama, function(){
                            console.log('Jurusan telah ditambahkan')
                            JurusanController.menu()
                        })
                    }
                })
            })
        
    }

    static async hapus() {
        rl.question('Kode Jurusan : ', async (kode) => {
                if(await Jurusan.cariId(kode)) {
                    Jurusan.delete(kode)
                    console.log('Jurusan berhasil dihapus')
                    JurusanController.menu(``)
                } else {
                        console.log('Jurusan gagal dihapus, silahkan coba lagi!')
                        JurusanController.menu()
                }
            })
        }
}