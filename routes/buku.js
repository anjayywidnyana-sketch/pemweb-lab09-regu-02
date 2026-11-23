const express = require('express');
const router = express.Router();

const buku = [
    {
        id: 1,
        judul: 'Pemrograman Web',
        penulis: 'Abdul Kadir',
        tahun: 2024
    },
    {
        id: 2,
        judul: 'Dasar-Dasar JavaScript',
        penulis: 'Raharjo',
        tahun: 2023
    }
];

// GET semua data buku
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Data buku berhasil ditampilkan',
        data: buku
    });
});

// GET pencarian buku berdasarkan judul
router.get('/cari', (req, res) => {
    const keyword = req.query.judul;

    const hasil = buku.filter(item =>
        item.judul.toLowerCase().includes(
            (keyword || '').toLowerCase()
        )
    );

    res.json({
        success: true,
        message: 'Hasil pencarian buku',
        data: hasil
    });
});

module.exports = router;