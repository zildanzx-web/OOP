// class siswa{
//         constructor(nama, kelas){
//             this.nama = nama;
//             this.kelas = kelas;
//         }

//         perkenalan(){
//             console.log(`Nama: ${this.nama}`);
//             console.log(`Kelas: ${this.kelas}`);
//         }

//         seragam(){
//             console.log("Menggunakan seragam Jurusan");
//         }
// };

// const siswa3 = new siswa("Jhon Doe", "XI PPLG");
// siswa3.perkenalan();

// const siswa1 = new siswa("Jane Doe", "X PPLG");
// siswa1.perkenalan();

// const siswa2 = new siswa();
// siswa2.seragam();


class Produk{
    constructor(nama, harga, jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }

    tampilkanInfo(){
        console.log("Nama: " + this.nama);
        console.log("Harga: Rp." + this.harga);
        console.log("Jumlah: " + this.jumlah);
    }

    hitungDiskon(persenDiskon){
        return this.harga-(this.harga * persenDiskon / 100);
    }
}

const prduk1 = new Produk("Keyboard", 150000, 10);
prduk1.tampilkanInfo();
console.log("Harga setelah diskon: Rp." + prduk1.hitungDiskon(10));

const monitor = new Produk("Monitor Xiaomi", 2500000, 5);
monitor.tampilkanInfo();
console.log("Harga setelah diskon: Rp." + monitor.hitungDiskon(15));

const mouse = new Produk("Mouse Logitech", 500000, 20);
mouse.tampilkanInfo();
console.log("Harga setelah diskon: Rp." + mouse.hitungDiskon(5));

const keyboard = new Produk("Keyboard Mechanical", 1000000, 15);
keyboard.tampilkanInfo();
console.log("Harga setelah diskon: Rp." + keyboard.hitungDiskon(20));
