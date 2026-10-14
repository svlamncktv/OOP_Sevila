class Rekening {
    //data private tidak bisa diakses langsung dari luar class
    #saldo = 0;

    constructor(saldoAwal){
        this.#saldo = saldoAwal;
    }
    //method untuk menambah saldo
    setor(jumlah){
        if(jumlah > 0 ){
            this.#saldo += jumlah; 
            console.log("Setor tunai berhasil");
        }else{
            console.log("Jumlah setor harus > 0")
        }
    }
    //method mengambil saldo
    tarik(jumlah){
        if(jumlah > 0 && jumlah <= this.#saldo){
            this.#saldo -= jumlah; 
            console.log("Penarikan saldo berhasil");
        }else{
            console.log("Penarikan saldo gagal");
        }
    }
    lihatsaldo(){
        console.log("Saldo anda Rp. " + this.#saldo);
    }
}
//buat object baru
const rekeningsevila = new Rekening(2975000000);
//menggunakan method yang kita buat
rekeningsevila.lihatsaldo();
rekeningsevila.setor(129000000);
rekeningsevila.tarik(4000000);
rekeningsevila.lihatsaldo();