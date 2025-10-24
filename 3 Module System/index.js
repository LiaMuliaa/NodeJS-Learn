// const fs = require('fs');   // core module
// const cetakNama = require('./coba');    // local module
// const moment = require('moment');   // third party / npm module / node_modules



const coba = require('./coba');

console.log(
    coba.cetakNama('Lia'),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
);