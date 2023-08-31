   CREATE TABLE login(
    username VARCHAR(100) PRIMARY KEY NOT NULL,
    pw VARCHAR (50) NOT NULL
   );
   
    INSERT INTO login(username, pw) VALUES
    ('Rizal', '12345');
   
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
('2022070001', 'Rizal', '2005-04-13', 'Sumedang', 'J03'),
('2022070002', 'thoriq', '2009-11-11', 'Sumedang', 'J03'),
('2022070003', 'Bima', '2019-11-02', 'Sumedang', 'J08'),
('2022070004', 'iqbal', '2009-9-09', 'Sumedang', 'J02'),
('2022070005', 'El', '2021-07-07', 'Sumedang', 'J01'),
('2022070009', 'NINI', '1945-08-17', 'Sumedang', 'J12');
--     -- tampilkan seluruh data mahasiswa dan jurusannya 
-- SELECT mahasiswa.*, jurusan.nama_jurusan FROM jurusan
-- INNER JOIN mahasiswa ON jurusan.id_jurusan = mahasiswa.id_jurusan;

CREATE TABLE dosen(
    nip CHAR(5) PRIMARY KEY NOT NULL,
    nama_dosen VARCHAR(30) NOT NULL
);

INSERT INTO dosen(nip, nama_dosen) VALUES
('DS001', 'Ujang');


CREATE TABLE mata_kuliah(
    id_mk CHAR(5) PRIMARY KEY NOT NULL,
    nama_mk VARCHAR(100) NOT NULL,
    sks INT(2) NOT NULL
);

INSERT INTO mata_kuliah VALUES
('MK001', 'Data Mining', 4),


-- nim, nip, nilai, id_mk,
CREATE TABLE kontrak(
        id_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
        nim CHAR(10) NOT NULL,
        nip CHAR(5) NOT NULL,
        id_mk CHAR(5) NOT NULL,
        nilai CHAR(2) DEFAULT "TT",
        FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
        FOREIGN KEY(nip) REFERENCES Dosen(nip),
        FOREIGN KEY(id_mk) REFERENCES mata_kuliah(id_mk)
    );

    INSERT INTO kontrak(nim, nip, id_mk, nilai) VALUES
    ('2022070001', 'DS001', 'MK001', 'A');