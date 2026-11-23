const express = require('express');
const router = express.Router();

const anggota = [
    {
        id: 1,
        nama: 'I Putu Widnyana',
        nim: '42530002',
        prodi: 'Teknologi Informasi'
    },
    {
        id: 2,
        nama: 'Ni Luh Septi Astini',
        nim: '42530003',
        prodi: 'Teknologi Informasi'
    },
    {
        id: 3,
        nama: 'Ni Wayan Jati Martini',
        nim: '42530004',
        prodi: 'Teknologi Informasi'
    }
];

// GET semua data anggota
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Data anggota berhasil ditampilkan',
        data: anggota
    });
});

// GET pencarian anggota berdasarkan nama atau NIM
router.get('/cari', (req, res) => {
    const keyword = (req.query.keyword || '').toLowerCase();

    const hasil = anggota.filter(item =>
        item.nama.toLowerCase().includes(keyword) ||
        item.nim.includes(keyword)
    );

    res.json({
        success: true,
        message: 'Hasil pencarian anggota',
        data: hasil
    });
});

module.exports = router;