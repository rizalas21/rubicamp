//views untuk tampilan
import { garis } from '../university.js';
import Table from 'cli-table'
export function showTable(data) {
    var table = new Table({
        head: ['ID Matkul', 'Nama Matkul', 'SKS']
        , colWidths: [30, 50, 20]
    });

    data.forEach((item) => {
        table.push(
            [item.id_mk, item.nama_mk, item.sks])
    });

    console.log(table.toString());
}

export function findResult(data) {
    garis()
    console.log(`
Detail Mata kuliah Dengan Kode '${data.id_mk}' :
Kode Mata kuliah : ${data.id_mk}
Nama Mata kuliah : ${data.nama_mk}
SKS              : ${data.sks}
`)
};

