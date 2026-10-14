const introductionFunction = function() {
        console.log("Halo, Saya adalah " + this.author);
        console.log("Penulis novel " + this.title);
        console.log("Buku saya yaitu " + this.title + " dirilis pada tahun " + this.release);
};

const readFunction = function() {
    console.log("Buku " + this.title + " banyak dibaca dan populer pada tahun " + this.prime);
}

const book =[
    {
    title: "The Zodiac Killer",
    author: "Shoji Shimada",
    release: "1981",
    status: "copyright",
    prime: "1980an",
    introduction: introductionFunction,
    read: readFunction
},
{
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    release: "1848",
    status: "Public Domain",
    prime : "2024-2025",
    introduction: introductionFunction,
    read: readFunction
}
];


// book[0].introduction();
// book[1].introduction();
// book[0].read();
// book[1].read();

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

book[1].introduction(); 
book[1].read();

