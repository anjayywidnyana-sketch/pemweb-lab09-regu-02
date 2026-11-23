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

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Data buku berhasil ditampilkan',
        data: buku
    });
});

module.exports = router;