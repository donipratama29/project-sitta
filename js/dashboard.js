// Ambil data user dari localStorage
const userLogin = JSON.parse(localStorage.getItem('userLogin'));

// Jika belum login, arahkan ke halaman login
if (!userLogin) {
  alert('Silakan login terlebih dahulu!');
  window.location.href = 'index.html';
}

// Greeting waktu otomatis
const greetingEl = document.getElementById('greeting');
const jam = new Date().getHours();
let greet = '';

if (jam >= 4 && jam < 11) greet = 'Selamat pagi';
else if (jam >= 11 && jam < 15) greet = 'Selamat siang';
else if (jam >= 15 && jam < 18) greet = 'Selamat sore';
else greet = 'Selamat malam';

greetingEl.innerHTML = `${greet}, ${userLogin.nama} 👋`;

// Tampilkan role dan lokasi
const infoEl = document.getElementById('userInfo');
infoEl.innerHTML = `
  Selamat datang di dashboard SITTA (Pemesanan Bahan Ajar Universitas Terbuka).<br>
  <b>Role:</b> ${userLogin.role}<br>
  📍 <b>Lokasi:</b> ${userLogin.lokasi}
`;

// Logout handler
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('userLogin');
  alert('Anda telah keluar dari sistem.');
  window.location.href = 'index.html';
});
