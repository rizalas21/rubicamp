CREATE TABLE Jurusan(
    ID_Jurusan CHAR(4) PRIMARY KEY NOT NULL,
    NAMA_Jurusan CHAR(20) NOT NULL
);

INSERT INTO Jurusan(ID_Jurusan, NAMA_Jurusan) VALUES
('222', 'Ilmu Komputer'),
('223', 'Ilmu Teknologi'),
('224', 'Ilmu Infotmatika'),
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
('3306', 'Yamin Pedas')

CREATE TABLE Mahasiswa(
    NIM CHAR(5) PRIMARY KEY NOT NULL,
    NAMA VARCHAR(25) NOT NULL,
    ALAMAT VAR CHAR(30) NOT NULL,
    JURUSAN CHAR(20) NOT NULL,
    FOREIGN KEY(JURUSAN) REFERENCES Jurusan(ID_Jurusan)
);

INSERT INTO Mahasiswa(NIM, NAMA, ALAMAT, JURUSAN) VALUES
('20231', 'Rizal Sudrajat', 'Sumedang')
('20232', 'Rizki Hidayatulloh', 'Tasikmalaya')
('20233', 'Muhammad Ramdani','Garut')
('20234', 'Ogi Rizki', 'Bandung')
('20235', 'Oki Ramadani', 'Medan')
('20236', 'Ahamad Adifta', 'Bogor')
('20237', 'Kiki', 'Bandung')
('20238', 'Lathif', 'Sumedang')

CREATE TABLE kontrak(
    NIP CHAR(4) NOT NULL,
    ID_MATKUL CHAR(5) NOT NULL,
    NIM CHAR(5) NOT NULL,
    ID_Jurusan CHAR(4) NOT NULL,
    SKS CHAR(3) NOT NULL,
    NILAI INT(2) NOT NULL,
    FOREIGN KEY(NIM) REFERENCES Mahasiswa(NIM),
    FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan(ID_Jurusan),
    FOREIGN KEY(NIP) REFERENCES Dosen(NIP),
    FOREIGN KEY(ID_MATKUL) REFERENCES Mata_Kuliah(ID_MATKUL),
    FOREIGN KEY(SKS) REFERENCES Mata_Kuliah(SKS)
);

INSERT INTO kontrak(NIP,  ID_MATKUL, NIM, ID_Jurusan, SKS , NILAI) VALUES
('3301', '20001', '20231', '223', 5, 90),
('3302', '20002', '20231', '223', 4, 85),
('3303', '20003', '20232', '221', 3, 80),
('3305', '20005', '20235', '222', 6, 90);


SELECT * FROM kontrak;
-- dan banyak lagi
-- 
-- dosen awalnya 33
-- matkul awalnya 2000
-- mahasiswa awalnya 2023
-- jurusan awalnya 22
-- sks 1 angka 
-- nilai 2 angka