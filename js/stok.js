// Ambil elemen tabel dan input pencarian
const tabel = document.getElementById("stokTable").querySelector("tbody");
const inputCari = document.getElementById("searchInput");

// Gunakan data dari data.js (dataBahanAjar)
const bahanAjar = dataBahanAjar;

// Fungsi untuk menampilkan data di tabel
function tampilkanData(data) {
  tabel.innerHTML = "";
  data.forEach(item => {
    const baris = document.createElement("tr");
    baris.innerHTML = `
      <td>${item.kodeBarang}</td>
      <td>${item.namaBarang}</td>
      <td>${item.jenisBarang}</td>
      <td>${item.stok}</td>
      <td><button onclick="lihatDetail('${item.kodeBarang}')">Detail</button></td>
    `;
    tabel.appendChild(baris);
  });
}

// Fungsi pencarian (filter berdasarkan nama bahan ajar)
inputCari.addEventListener("keyup", () => {
  const keyword = inputCari.value.toLowerCase();
  const hasil = bahanAjar.filter(item =>
    item.namaBarang.toLowerCase().includes(keyword)
  );
  tampilkanData(hasil);
});

// Elemen modal
const detailModal = document.getElementById("detailModal");
const detailBody = document.getElementById("detailBody");
const closeDetail = document.getElementById("closeDetail");

// Fungsi untuk menampilkan detail bahan ajar di modal
function lihatDetail(kode) {
  const item = bahanAjar.find(x => x.kodeBarang === kode);

  // Isi konten modal
  detailBody.innerHTML = `
    <img src="${item.cover}" 
         alt="${item.namaBarang}" 
         style="width: 100%; border-radius: 10px; margin-bottom: 10px;">
    <p><b>Judul:</b> ${item.namaBarang}</p>
    <p><b>Kategori:</b> ${item.jenisBarang}</p>
    <p><b>Kode Lokasi:</b> ${item.kodeLokasi}</p>
    <p><b>Edisi:</b> ${item.edisi}</p>
    <p><b>Stok Tersedia:</b> ${item.stok}</p>
  `;

  detailModal.classList.remove("hidden");
}

// Tombol untuk menutup modal
closeDetail.addEventListener("click", () => {
  detailModal.classList.add("hidden");
});

// Tutup modal jika klik area luar
window.addEventListener("click", (e) => {
  if (e.target === detailModal) {
    detailModal.classList.add("hidden");
  }
});

// Tampilkan semua data saat pertama kali halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  tampilkanData(bahanAjar);
});
