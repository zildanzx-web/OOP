class Rekening {
    #saldo = 0;

    constructor(saldoAwal = 0) {
        this.#saldo = saldoAwal;
    }

    setorUang(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log("Berhasil menyetor : Rp." + jumlah);
        } else {
            console.log("Jumlah setor harus lebih dari 0");
        }
    }
    
    tariksaldo(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;                                                                                                                                                                                                                                                                                     
            console.log("Berhasil menarik uang : Rp." + jumlah);
        } else {
            console.log("Jumlah penarikan tidak valid atau melebihi saldo");
        }
    }

    lihatSaldo() {
        console.log("Saldo saat ini: Rp." + this.#saldo);
    }
}

//buat objek baru
const rekening = new Rekening(1000000);
//menggunakan method yang kita buat
rekening.lihatSaldo();
rekening.setorUang(50000);
rekening.tariksaldo(40000);
rekening.lihatSaldo();