-- .schema (nama_tabel);
-- .headers on (menampilkan header)
-- .mode. column (merapihkan kolom)
-- SELECT * FROM (nama_tabel); (menampilkan tabel tertentu)
-- DROP TABLE (nama tabel); (menghapus tabel)

    CREATE TABLE jurusan(
        id_jurusan VARCHAR(3) PRIMARY KEY NOT NULL,
        nama_jurusan VARCHAR(20) NOT NULL
    );

    INSERT INTO jurusan(id_jurusan, nama_jurusan) VALUES
    ('222', 'Ilmu Komputer'),       
    ('223', 'Ilmu Teknologi'),
    ('224', 'Informatika'),
    ('225', 'Data Analyst');

    CREATE TABLE mata_kuliah(
        id_matkul CHAR(5) PRIMARY KEY NOT NULL,
        sks INT(3) NOT NULL,
        nama_matkul VARCHAR(25) NOT NULL
    );

    INSERT INTO mata_kuliah(id_matkul, nama_matkul, sks) VALUES
    ('20001', 'Matematika', 6),
    ('20002', 'Data Base', 8),
    ('20003', 'Statistik', 7),
    ('20004', 'Kaeamanan Informasi', 6),
    ('20005', 'Pemrograman', 7),
    ('20006', 'Pengembangan Web', 7);

    CREATE TABLE dosen(
        nip CHAR(4) PRIMARY KEY NOT NULL,
        nama VARCHAR(25) NOT NULL
    );

    INSERT INTO dosen(nip, nama) VALUES
    ('3301', 'Dedi'),
    ('3302', 'Sri'),
    ('3303', 'Pepen'),
    ('3304', 'Rubi'),
    ('3305', 'Reky'),
    ('3306', 'Yamin');

    CREATE TABLE mahasiswa(
        nim CHAR(5) PRIMARY KEY NOT NULL,
        nama VARCHAR(25) NOT NULL,
        alamat VARCHAR(30) NOT NULL,
        jurusan VARCHAR(3) NOT NULL,
        FOREIGN KEY(jurusan) REFERENCES jurusan(id_jurusan)
    );

    INSERT INTO mahasiswa(nim, nama, alamat, jurusan) VALUES
    ('20231', 'Rizal Sudrajat', 'Sumedang', '223'),
    ('20232', 'Rizki Hidayatulloh', 'Tasikmalaya', '222'),
    ('20233', 'Muhammad Ramdani', 'Garut', '222'),
    ('20234', 'Ogi Rizki', 'Bandung', '225'),
    ('20235', 'Oki Ramadani', 'Medan', '224'),
    ('20236', 'Ahamad Adifta', 'Bogor', '224'),
    ('20237', 'Kiki', 'Bandung', '223'),
    ('20238', 'Lathif', 'Sumedang', '225');


    CREATE TABLE kontrak(
        id_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
        nip CHAR(4) NOT NULL,
        id_matkul CHAR(5) NOT NULL,
        nim CHAR(5) NOT NULL,
        nilai CHAR(1) DEFAULT "C",
        FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
        FOREIGN KEY(nip) REFERENCES Dosen(nip),
        FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id_matkul)
    );

    INSERT INTO kontrak(nim, nip, id_matkul) VALUES
    ('20231', '3301', '20001'),
    ('20232', '3302', '20002'),
    ('20233', '3303', '20003'),
    ('20234', '3305', '20005'),
    ('20235', '3306', '20004'),
    ('20236', '3302', '20006'),
    ('20237', '3304', '20005'),
    ('20238', '3306', '20004'),
    ('20238', '3301', '20001'),
    ('20231', '3302', '20002'),
    ('20232', '3303', '20003'),
    ('20233', '3305', '20005'),
    ('20234', '3306', '20004'),
    ('20235', '3302', '20002'),
    ('20239', '3307', '20007'),
('20210', '3308', '20008'),
('20211', '3309', '20009'),
('20212', '3310', '20010'),
('20213', '3311', '20011'),
('20214', '3303', '20012'),
('20215', '3304', '20013'),
('20216', '3305', '20014'),
('20217', '3306', '20015'),
('20218', '3307', '20011'),
('20219', '3309', '20015');


UPDATE kontrak SET nilai='A' WHERE id_kontrak = 1;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 2;
UPDATE kontrak SET nilai='C' WHERE id_kontrak = 3;
UPDATE kontrak SET nilai='D' WHERE id_kontrak = 4;
UPDATE kontrak SET nilai='C' WHERE id_kontrak = 5;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 6;
UPDATE kontrak SET nilai='A' WHERE id_kontrak = 7;
UPDATE kontrak SET nilai='D' WHERE id_kontrak = 8;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 9;
UPDATE kontrak SET nilai='D' WHERE id_kontrak = 10;
UPDATE kontrak SET nilai='A' WHERE id_kontrak = 11;
UPDATE kontrak SET nilai='D' WHERE id_kontrak = 12;
UPDATE kontrak SET nilai='E' WHERE id_kontrak = 13;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 14;
UPDATE kontrak SET nilai='A' WHERE id_kontrak = 15;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 16;
UPDATE kontrak SET nilai='D' WHERE id_kontrak = 17;
UPDATE kontrak SET nilai='A' WHERE id_kontrak = 18;
UPDATE kontrak SET nilai='A' WHERE id_kontrak = 19;
UPDATE kontrak SET nilai='C' WHERE id_kontrak = 20;
UPDATE kontrak SET nilai='E' WHERE id_kontrak = 21;
UPDATE kontrak SET nilai='C' WHERE id_kontrak = 22;
UPDATE kontrak SET nilai='B' WHERE id_kontrak = 23;
UPDATE kontrak SET nilai='E' WHERE id_kontrak = 24;



ALTER TABLE mahasiswa ADD lahir DATE;
UPDATE mahasiswa set lahir='2005-04-13' WHERE NIM='20231';
UPDATE mahasiswa set lahir='2000-01-25' WHERE NIM='20232';
UPDATE mahasiswa set lahir='2004-03-11' WHERE NIM='20233';
UPDATE mahasiswa set lahir='2002-02-30' WHERE NIM='20234';
UPDATE mahasiswa set lahir='2003-12-28' WHERE NIM='20235';
UPDATE mahasiswa set lahir='2002-11-21' WHERE NIM='20236';
UPDATE mahasiswa set lahir='2001-07-23' WHERE NIM='20237';
UPDATE mahasiswa set lahir='2004-08-17' WHERE NIM='20238';
UPDATE mahasiswa set lahir='2003-08-17' WHERE NIM='20239';
UPDATE mahasiswa set lahir='2004-08-17' WHERE NIM='20210';
UPDATE mahasiswa set lahir='2005-08-17' WHERE NIM='20211';
UPDATE mahasiswa set lahir='2006-08-17' WHERE NIM='20212';
UPDATE mahasiswa set lahir='2002-08-17' WHERE NIM='20213';
UPDATE mahasiswa set lahir='2003-08-17' WHERE NIM='20214';
UPDATE mahasiswa set lahir='2001-08-17' WHERE NIM='20215';
UPDATE mahasiswa set lahir='2000-08-17' WHERE NIM='20216';


    INSERT INTO mahasiswa(nim, nama, alamat, jurusan) VALUES
    ('20239', 'Bima', 'Sumedang', '223'),
    ('20210', 'Thoriq', 'Bandung', '222'),
    ('20211', 'Dani', 'Subang', '225'),
    ('20212', 'Pow', 'Bandung', '225'),
    ('20213', 'Baki', 'Jepang', '224'),
    ('20214', 'Ogre', 'Jakarta', '223'),
    ('20215', 'Alia', 'Sumedang', '226'),
    ('20216', 'Nayla', 'Sumedang', '223');

INSERT INTO kontrak(nim, nip, id_matkul) VALUES
('20239', '3307', '20007'),
('20210', '3308', '20008'),
('20211', '3309', '20009'),
('20212', '3310', '20010'),
('20213', '3311', '20011'),
('20214', '3303', '20012'),
('20215', '3304', '20013'),
('20216', '3305', '20014'),
('20217', '3306', '20015'),
('20218', '3307', '20011'),
('20219', '3309', '20015');

INSERT INTO mata_kuliah(id_matkul, nama, sks) VALUES
("20007", "Bahasa Inggris", 2),
("20008", "Ilmu Pendidikan", 2),
("20009", "Pancasila dan Kewarganegaraan", 2),
("20010", "Data Mining", 3),
("20011", "Bahasa Inggris II", 2),
("20012", "Praktikum Fisika Dasar", 1),
("20013", "Bahasa Indonesia", 2),
("20014", "Algoritma dan Pemrograman", 3),
("20015", "Statistika Dasar", 3);

INSERT INTO dosen(nip, nama) VALUES
('3307','Agus'),
('3308','Asep'),
('3309','Ipin'),
('3310','Ninit'),
('3311','Winda');

INSERT INTO kontrak(nim, nip, id_matkul) VALUES
('20231', '3307', '20007'),
('20233', '3308', '20008'),
('20234', '3309', '20009'),
('20235', '3310', '20010'),
('20236', '3311', '20011'),
('20231', '3312', '20007'),
('20233', '3313', '20016'),
('20234', '3314', '20013'),
('20237', '3315', '20014');

-- tugas 1 tampilkan seluruh data mahasiswa dan jurusannya
SELECT mahasiswa.*, jurusan.nama_jurusan FROM mahasiswa
INNER JOIN jurusan ON mahasiswa.jurusan = id_jurusan;

-- tugas ke 2 tampilkan mahasiswa yang memiliki umur dibawah 20 tahun
SELECT *,DATE('now')-DATE(lahir) AS umur from mahasiswa WHERE umur <= 20;

-- tugas 3 tampilkan mahasiswa yang memiliki nilai 'B' ke atas
SELECT DISTINCT nim,(SELECT nama FROM mahasiswa WHERE mahasiswa.nim = kontrak.nim) AS nama FROM kontrak WHERE nilai >= 'B';

-- tugas 4 tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10
SELECT mahasiswa.nim, mahasiswa.nama, SUM(mata_kuliah.sks) AS total_sks
FROM mahasiswa
JOIN kontrak ON mahasiswa.nim = kontrak.nim
JOIN mata_kuliah ON kontrak.id_matkul = mata_kuliah.id_matkul
GROUP BY mahasiswa.nim, mahasiswa.nama
HAVING total_sks > 10;

-- tugas 5 tampilkan mahasiswa yang mengontrak mata kuliah 'data mining'
SELECT kontrak.nim, mahasiswa.nama AS nama_mahasiswa, kontrak.id_matkul, mata_kuliah.nama_matkul AS matkul
FROM kontrak
JOIN mahasiswa ON kontrak.nim = mahasiswa.nim
JOIN mata_kuliah ON kontrak.id_matkul = mata_kuliah.id_matkul;

-- tugas 6 tampilkan jumlah mahasiswa untuk setiap dosen
SELECT *, (SELECT COUNT(DISTINCT NIM) FROM kontrak WHERE kontrak.nip = dosen.nip) AS jumlah_mahasiswa FROM dosen;

-- tugas 7 urutkan mahasiswa berdasarkan umurnya
SELECT *,DATE('now')-DATE(lahir) AS umur FROM mahasiswa ORDER BY umur ASC;

-- tugas 8 tampilkan kontrak mata kuliah yang harus diulang (D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap.
SELECT DISTINCT * FROM kontrak JOIN mahasiswa ON kontrak.nim = mahasiswa.nim JOIN jurusan ON jurusan.id_jurusan = mahasiswa.jurusan JOIN dosen ON dosen.nip = kontrak.nip WHERE nilai >= 'D';

