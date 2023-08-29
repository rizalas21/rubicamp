    CREATE TABLE jurusan(
    id_jurusan char(3) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR (100) NOT NULL);


    CREATE TABLE mahasiswa(
            nim CHAR(10) PRIMARY KEY NOT NULL,
            nama VARCHAR(25) NOT NULL,
            tanggal_lahir DATE NOT NULL,
            alamat VARCHAR(30) NOT NULL,
            id_jurusan VARCHAR (100) NOT NULL,
            FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
        );

INSERT INTO mahasiswa(nim, nama, tanggal_lahir, alamat, id_jurusan) VALUES
('2022070001', 'Rizal', '2005-04-13', 'Sumedang', 'J03');
    -- tampilkan seluruh data mahasiswa dan jurusannya 
SELECT mahasiswa.*, jurusan.nama_jurusan FROM jurusan
INNER JOIN mahasiswa ON jurusan.id_jurusan = mahasiswa.id_jurusan;
