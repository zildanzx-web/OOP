const book = {
    Judul: "kitab rongawi",
    Penulis: "Jhon Doe",
    Rilis: "2045",

    dibaca:function() {
        console.log("Buku " + this.Judul + " dibaca boskyu");
    }
};

const mobil = {
    Nama: "Avanza",
    Tahun: "2020",
    Kecepatan: 0,
    
    jalan:function() {
        this.Kecepatan += 100;
        console.log("Mobil Berjalan dengan kecepatan " + this.Kecepatan + " km/jam boskyu");
    }
};

console.log( book.Judul);
book.dibaca();

console.log(mobil.Nama);
mobil.jalan();
