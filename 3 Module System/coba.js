//  Cara meng-Eksport

//  1. Function
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

//  2. Variabel
const PI = 3.14;

//  3. Object
const mahasiswa = {
    nama: 'Annisa Aqila',
    umur: 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

//  4. Kelas
class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!!');
    }
}

module.exports = { cetakNama, PI, mahasiswa, Orang };