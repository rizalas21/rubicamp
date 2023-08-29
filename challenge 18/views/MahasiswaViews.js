//views untuk tampilan
import { garis } from '../university.js';
import Table from 'cli-table'
export function mahasiswaTable(data) {
    var table = new Table({
        head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Id Jurusan', 'Nama Jurusan']
        , colWidths: [15, 15, 15, 20, 20, 15]
    });
    data.forEach(element => {
        table.push(
            [element.nim, element.nama, element.tanggal_lahir, element.alamat, element.id_jurusan, element.nama_jurusan]);
        
    });

    console.log(table.toString());
}

export function findResult(data) {
    garis()
    console.log(`
Detail Jurusan Dengan Kode '${data.nim}' :
Kode mahasiswa : ${data.nim}
Nama mahasiswa : ${data.nama}
Tanggal Lahir  : ${data.tanggal_lahir}
Alamat         : ${data.alamat}
ID Jurusan     : ${data.id_jurusan}
Nama Jurusan   : ${data.nama_jurusan}
`)
};
