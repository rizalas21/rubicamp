import MahasiswaController from './controllers/MahasiswaController.js'
import JurusanController from './controllers/JurusanController.js'
import MataKuliahController from './controllers/MataKuliahController.js'
import DosenController from './controllers/DosenController.js'
import KontrakController from './controllers/KontrakController.js'
import { rl } from './connect.js'

export function garis() {
    let line = ''
    for (let i = 0; i < 100; i++) line += '='
    return console.log(line)
}


export function menuUtama() {
    garis()
    console.log(`
silahkan pilih menu dibawah ini:
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`)  
    garis()
    
    rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
        switch (answer) {
            case '1':
                MahasiswaController.menu()
                break;

            case '2':
                JurusanController.menu()
                break;

            case '3':
                DosenController.menu()
                break;

            case '4':
                MataKuliahController.menu()
                break;

            case '5':
                KontrakController.menu()
                break;

            case '6':
                console.log('Keluar')
                process.exit(0)

            default:
                console.log('anda salah memasukkan opsi, silahkan coba lagi!')
                menuUtama()
                break;
        }
    })
}

menuUtama()