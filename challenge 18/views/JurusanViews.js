//views untuk tampilan
import { garis } from '../university.js';
import Table from 'cli-table'
export function showTable(data) {
    var table = new Table({
        head: ['ID Jurusan', 'Nama Jurusan']
        , colWidths: [20, 80]
    });

    data.forEach((item) => {
        table.push(
            [item.id_jurusan, item.nama_jurusan])
    });

    console.log(table.toString());
}

export function findResult(data) {
    garis()
    console.log(`
Detail Jurusan Dengan Kode '${data.id_jurusan}' :
Kode Jurusan : ${data.id_jurusan}
Nama Jurusan : ${data.nama_jurusan}
`)
};

