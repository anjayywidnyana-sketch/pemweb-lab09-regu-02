require('dotenv').config();

const express = require('express');

const bukuRoutes = require('./routes/buku');
const anggotaRoutes = require('./routes/anggota');

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Portal Katalog TI';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: `Selamat datang di ${APP_NAME}`,
        status: 'Server aktif - Versi A',
        version: '1.0.0'
    });
});

app.use('/api/buku', bukuRoutes);
app.use('/api/anggota', anggotaRoutes);

app.listen(PORT, () => {
    console.log(`${APP_NAME} berjalan di http://localhost:${PORT}`);
});
