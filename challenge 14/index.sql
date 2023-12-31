-- .schema (nama_tabel);
-- .headers on (menampilkan header)
-- .mode. column (merapihkan kolom)
-- SELECT * FROM (nama_tabel); (menampilkan tabel tertentu)
-- DROP TABLE (nama tabel); (menghapus tabel)

CREATE TABLE Jurusan(
    ID_Jurusan VARCHAR(4) PRIMARY KEY NOT NULL,
    NAMA_Jurusan VARCHAR(20) NOT NULL
);

INSERT INTO Jurusan(ID_Jurusan, NAMA_Jurusan) VALUES
('222', 'Ilmu Komputer'),
('223', 'Ilmu Teknologi'),
('224', 'Informatika'),
('225', 'Data Analyst');

CREATE TABLE Mata_Kuliah(
     ID_MATKUL CHAR(5) PRIMARY KEY NOT NULL,
    NAMA_MATKUL VARCHAR(25) NOT NULL,
    SKS INT(3) NOT NULL
);

INSERT INTO Mata_Kuliah(ID_MATKUL, NAMA_MATKUL, SKS) VALUES
('20001', 'Matematika', 3),
('20002', 'Data Base', 2),
('20003', 'Statistik', 3),
('20004', 'Kaeamanan Informasi', 3),
('20005', 'Pemrograman', 4),
('20006', 'Pengembangan Web', 4);

CREATE TABLE Dosen(
    NIP CHAR(4) PRIMARY KEY NOT NULL,
    NAMA VARCHAR(25) NOT NULL
);

INSERT INTO Dosen(NIP, NAMA) VALUES
('3301', 'Dedi Priadi'),
('3302', 'Sri Wahyuni'),
('3303', 'Pepen Sudrajat'),
('3304', 'Rubi Henjaya'),
('3305', 'Reky Senjaya'),
('3306', 'Yamin Pedas');

CREATE TABLE Mahasiswa(
    NIM CHAR(5) PRIMARY KEY NOT NULL,
    NAMA VARCHAR(25) NOT NULL,
    ALAMAT VARCHAR(30) NOT NULL,
    JURUSAN VARCHAR(4) NOT NULL,
    FOREIGN KEY(JURUSAN) REFERENCES Jurusan(ID_Jurusan)
);

INSERT INTO Mahasiswa(NIM, NAMA, ALAMAT, JURUSAN) VALUES
('20231', 'Rizal Sudrajat', 'Sumedang', '223'),
('20232', 'Rizki Hidayatulloh', 'Tasikmalaya', '222'),
('20233', 'Muhammad Ramdani', 'Garut', '222'),
('20234', 'Ogi Rizki', 'Bandung', '225'),
('20235', 'Oki Ramadani', 'Medan', '224'),
('20236', 'Ahamad Adifta', 'Bogor', '224'),
('20237', 'Kiki', 'Bandung', '223'),
('20238', 'Lathif', 'Sumedang', '225');

CREATE TABLE kontrak(
    ID_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
    NIP CHAR(4) NOT NULL,
    ID_MATKUL CHAR(5) NOT NULL,
    NIM CHAR(5) NOT NULL,
    NILAI INT(2) NOT NULL,
    FOREIGN KEY(NIM) REFERENCES Mahasiswa(NIM),
    FOREIGN KEY(NIP) REFERENCES Dosen(NIP),
    FOREIGN KEY(ID_MATKUL) REFERENCES Mata_Kuliah(ID_MATKUL)
);

INSERT INTO kontrak(NIP,  ID_MATKUL, NIM, NILAI) VALUES
('3301', '20001', '20231', 90),
('3302', '20002', '20231', 85),
('3303', '20003', '20232', 80),
('3305', '20005', '20235', 90);


SELECT * FROM kontrak;
-- dan banyak lagi
-- 
-- dosen awalnya 33
-- matkul awalnya 2000
-- mahasiswa awalnya 2023
-- jurusan awalnya 22
-- sks 1 angka 
-- nilai 2 angka