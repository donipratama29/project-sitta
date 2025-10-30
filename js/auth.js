// ================== LOGIN HANDLER ==================
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const user = dataPengguna.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('userLogin', JSON.stringify(user));
    alert(`Selamat datang, ${user.nama}!`);
    window.location.href = 'dashboard.html';
  } else {
    alert('Email atau password salah!');
  }
});

// ================== MODAL HANDLER ==================

// Lupa Password
const forgotLink = document.getElementById('forgotLink');
const forgotModal = document.getElementById('forgotModal');
const closeForgot = document.getElementById('closeForgot');
const forgotForm = document.getElementById('forgotForm');

forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  forgotModal.classList.remove('hidden');
});

closeForgot.addEventListener('click', () => {
  forgotModal.classList.add('hidden');
});

forgotForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim();
  if (email === '') {
    alert('Masukkan email UT Anda!');
    return;
  }
  alert('Link reset password telah dikirim ke email.');
  forgotModal.classList.add('hidden');
});

// Daftar Akun Baru
const registerLink = document.getElementById('registerLink');
const registerModal = document.getElementById('registerModal');
const closeRegister = document.getElementById('closeRegister');
const registerForm = document.getElementById('registerForm');

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerModal.classList.remove('hidden');
});

closeRegister.addEventListener('click', () => {
  registerModal.classList.add('hidden');
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('namaBaru').value.trim();
  const email = document.getElementById('emailBaru').value.trim();
  const password = document.getElementById('passwordBaru').value.trim();

  if (password.length < 6) {
    alert('Password minimal 6 karakter!');
    return;
  }

  alert(`Akun ${nama} berhasil didaftarkan!`);
  registerModal.classList.add('hidden');
});
