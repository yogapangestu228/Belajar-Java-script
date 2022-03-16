//Data Primitif
const namaLengkap = "Yoga Pangestu"; // String
let umur = 23; // Number
let mahasiswaAktif = false; //Boolean
let status = undefined; // Undefined
let koleksiFoto = null; // Null

console.log(`${namaLengkap},${umur},${mahasiswaAktif},${status},${koleksiFoto}`);

//Object
const dataPribadi = {
    namaLengkap : "Yoga Pangestu",
    namaPanggilan : "Yopang",
    jenisKelamin : "Laki-Laki",
    agama : "Islam",
    tempatLahir : "Tangerang",
    tanggalLahir : "21 juli 1998",
    alamat : {
        jalan : "jl. Sekolah dusun 5",
        kelurahan : "Purwodadi",
        kecamatan : "Sunggal",
        kabupaten : "Medan"
    }
};

console.log(dataPribadi)

//Array
let belajarBinar = ['HTML','CSS','Layout','Responsive','Botstrap']

console.log(belajarBinar)

belajarBinar.push('Java script')

console.log(belajarBinar)