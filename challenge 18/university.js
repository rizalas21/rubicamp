import readline from 'readline'
import JurusanController from './controllers/JurusanController.js'

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log(`
silahkan pilih menu dibawah ini:
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`)

rl.question('masukkan salah satu no. dari opsi diatas : ', (answer) => {
    switch (answer) {
        case '1':
            console.log('masuk Mahasiswa menu')
            break;

        case '2':
            JurusanController.menu()
            break;

        case '3':
            console.log('masuk Dosen menu')
            break;

        case '4':
            console.log('masuk Mata Kuliah menu')
            break;

        case '5':
            console.log('masuk Kontrak menu')
            break;

        case '6':
        console.log('Keluar')
        process.exit(0)

        default:
            break;
    }
})