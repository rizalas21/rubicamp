//views untuk tampilan
import Table from 'cli-table'

export function showTable(data) {
    var table = new Table({
        head: ['ID ', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
        , colWidths: [10, 20, 20, 15, 20, 15]
    });
    data.forEach(item => {
        table.push(
            [item.id_kontrak, item.nim, item.nama, item.nama_mk, item.nama_dosen, item.nilai? item.nilai: '']);

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
            [item.id_kontrak, item.nim, item.id_mk, item.nip? item.nip: '', item.nilai ? item.nilai : '']
        );
    })
    console.log(table.toString())
}

export function tablekumplit(data) {
    var table = new Table({
        head: ['NIM ', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
        , colWidths: [15, 20, 20, 15, 15, 15]
    });
    data.forEach(item => {
        table.push(
            [item.nim, item.nama, item.tanggal_lahir, item.alamat, item.id_jurusan, item.nama_jurusan? item.nama_jurusan: '']);

    });

    console.log(table.toString());
}

export function tableMatkul(data) {
    var table = new Table({
        head: ['Kode Matkul', 'Nama Matkul', 'SKS']
        , colWidths: [20, 20, 10]
    });
    data.forEach(item => {
        table.push(
            [item.id_mk, item.nama_mk, item.sks]);

    });

    console.log(table.toString());
}

export function tableDosen(data) {
    var table = new Table({
        head: ['NIP', 'Nama Dosen']
        , colWidths: [15, 15]
    });
    data.forEach(item => {
        table.push(
            [item.nip, item.nama_dosen]);

    });

    console.log(table.toString());
}

export function tablejoin(data) {
    var table = new Table({
        head: ['ID', 'Mata Kuliah', 'Nilai']
        , colWidths: [15, 20, 15]
    });
    data.forEach(item => {
        table.push(
            [item.id_kontrak, item.nama_mk, item.nilai]);

    });

    console.log(table.toString());
}

