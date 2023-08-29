import { garis } from "../university.js";
import Table from "cli-table";

export function dosenTable(data) {
    var table = new Table({
        head: ['NIP', 'Nama'],
        colWidths: [20, 80]
    });

    data.forEach(dosen => {
        table.push(
            [dosen.nip, dosen.nama]
        )
    });

    console.log(table.toString())
}

export function findID(data) {
    garis()
    console.log(`
Detail Dosen Dengan NIP '${data.nip}'
NIP          : ${data.nip}
Nama dosen   : ${data.nama}
`)
};
