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

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Data anggota berhasil ditampilkan',
        data: anggota
    });
});

module.exports = router;
