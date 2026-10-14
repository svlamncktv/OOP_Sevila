const buku = {
    judul: "The Tokyo Zodiac Killer",
    penulis: "Shoji Shimada",
    Tahun_Terbit: "1981",

    dibaca:function(){
        console.log("Buku " + this.judul + " telah anda baca");
    }
};

const mobil = {
    brand: "Mazda Miata",
    warna: "Rubby Red",
    kecepatan: 0,

    jalan: function(){
        this.kecepatan += 100;
        console.log("Mobil berjalan di kecepatan " + this.kecepatan);
    }
};
// mobil.jalan();

console.log(buku.judul);
console.log(buku.penulis);
console.log(buku.Tahun_Terbit);
buku.dibaca();
mobil.jalan();

