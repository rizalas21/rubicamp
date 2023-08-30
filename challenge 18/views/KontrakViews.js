//views untuk tampilan
import Table from 'cli-table'

export function showTable(data) {
    console.log(data)
    var table = new Table({
        head: ['ID ', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
        , colWidths: [10, 20, 20, 15, 20, 15]
    });
    data.forEach(item => {
        table.push(
            [item.id_kontrak, item.nim, item.nama, item.nama_mk? item.nama_mk : '', item.nama_dosen, item.nilai]);

    });

    console.log(table.toString());
}
// cari id
export function kontrakTable(data) {
    var table = new Table({
        head: ['ID', 'NIM', 'Kode Matkul', 'NIP', 'Nilai'],
        colWidths: [5, 15, 20, 15, 15]
    });
    data.forEach(item => {
        table.push(
            [item.id_kontrak, item.nim, item.id_mk, item.nip, item.nilai ? item.nilai : '']
        );
    })
    console.log(table.toString())
}