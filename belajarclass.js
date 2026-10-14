class Siswa_PPLG{
    constructor(nama, kelas){
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan(){
        console.log(`Nama : ${this.nama}`);
        console.log(`Kelas : ${this.kelas}`);
    }
    seragam(){
        console.log("Menggunakan seragam jurusan");
    }
}

const siswa3 = new Siswa_PPLG("Sevila", "XI-PPLG");
siswa3.perkenalan();
const siswa1 = new Siswa_PPLG("Loopy", "X-PPLG");
siswa1.perkenalan();
const siswa2 = new Siswa_PPLG();
siswa2.seragam();

class Produk {
    constructor(nama, harga, jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }
    
    tampilkanInfo(){
        console.log("Nama Produk: " + this.nama);
        console.log("Harga : Rp." + this.harga);
        console.log("Jumlah: "+ this.jumlah);
    }
    hitungdiskon(persen){
        return this.harga-(this.harga *persen/100);
    }
}

const Keyboard = new Produk ("Keyboard", 150000, 64);
Keyboard.tampilkanInfo();
console.log("Harga produk satu setelah diskon : " + Keyboard.hitungdiskon(15));
const monitor = new Produk ("Monitor Samsung", 3700000, 21);
monitor.tampilkanInfo();
const Speaker = new Produk ("Speaker JBL", 154000, 113);
Speaker.tampilkanInfo();
const Mouse = new Produk ("Mouse Monster", 67000, 154);
Mouse.tampilkanInfo();

// const announcementdiscFunction = function() {
//     console.log("Selamat Datang! Berikut lampiran informasi diskon kami!");
//     console.log(this.nama + "Harga  awal : " + this.harga + "Harga diskon : " );
// }
// announcementdiscFunction: announcement;
// Produk[1].announcementdiscFunction


console.log("Harga produk satu setelah diskon : " + monitor.hitungdiskon(15));