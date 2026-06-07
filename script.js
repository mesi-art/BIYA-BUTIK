let produkAktif = null;

let keranjang = [];

// MENAMPILKAN DETAIL PRODUK
function showDetail(nama, gambar, deskripsi, harga) {

    document.getElementById("detailProduk").style.display = "block";

    document.getElementById("detailNama").innerHTML = nama;
    document.getElementById("detailImg").src = gambar;
    document.getElementById("detailHarga").innerHTML = harga;
    document.getElementById("detailDeskripsi").innerHTML = deskripsi;

    produkAktif = {
        nama: nama,
        gambar: gambar,
        harga: harga
    };

    document.getElementById("detailProduk").scrollIntoView({
        behavior: "smooth"
    });
}

// TAMBAH KE KERANJANG
function tambahKeranjang() {

    if (produkAktif === null) {
        alert("Pilih produk terlebih dahulu.");
        return;
    }

    keranjang.push(produkAktif);

    tampilkanKeranjang();

    alert("Produk berhasil ditambahkan ke keranjang.");
}

// TAMPILKAN KERANJANG
function tampilkanKeranjang() {

    let cart = document.getElementById("cartItems");

    if (keranjang.length === 0) {

        cart.innerHTML = `
            <p>Belum ada produk di keranjang.</p>
        `;

        return;
    }

    cart.innerHTML = "";

    keranjang.forEach((item, index) => {

        cart.innerHTML += `
            <div class="cart-item">

                <h4>${item.nama}</h4>

                <p>${item.harga}</p>

                <button onclick="hapusKeranjang(${index})">
                    Hapus
                </button>

            </div>
        `;
    });
}

// HAPUS SATU PRODUK
function hapusKeranjang(index) {

    keranjang.splice(index, 1);

    tampilkanKeranjang();
}

// KOSONGKAN SEMUA KERANJANG
function kosongkanKeranjang() {

    keranjang = [];

    tampilkanKeranjang();
}