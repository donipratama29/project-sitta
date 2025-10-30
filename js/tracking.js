document.addEventListener("DOMContentLoaded", function () {
  // Pastikan JS dijalankan setelah HTML dimuat
  const data = dataTracking;

  const input = document.getElementById("doInput");
  const btnLacak = document.getElementById("btnLacak");
  const hasilDiv = document.getElementById("hasilTracking");

  function getStatusStyle(status) {
    const text = status.toLowerCase();

    if (text.includes("selesai")) {
      return { class: "status-selesai", icon: "✅", label: "Selesai Dikirim" };
    }
    if (text.includes("dalam")) {
      return { class: "status-dalam", icon: "🚚", label: "Dalam Perjalanan" };
    }
    if (text.includes("dikirim")) {
      return { class: "status-dikirim", icon: "📦", label: "Sedang Diproses" };
    }

    return { class: "", icon: "[i]", label: status };
  }

  btnLacak.addEventListener("click", () => {
    const kode = input.value.trim();
    hasilDiv.innerHTML = "";

    // Validasi input
    if (kode === "") {
      hasilDiv.innerHTML = "<p style='color:red;'>⚠ Masukkan nomor DO terlebih dahulu.</p>";
      return;
    }

    // Cek apakah DO ditemukan
    const hasil = data[kode];
    if (!hasil) {
      hasilDiv.innerHTML = `<p style='color:red;'>❌ Nomor DO <b>${kode}</b> tidak ditemukan.</p>`;
      return;
    }

    // Ambil style status
    const { class: statusClass, icon, label } = getStatusStyle(hasil.status);

    // Buat list perjalanan
    let perjalananHTML = "";
    hasil.perjalanan.forEach(step => {
      perjalananHTML += `
        <li>
          <b>${step.waktu}</b><br>
          ${step.keterangan}
        </li>
      `;
    });

    // Tampilkan hasil tracking
    hasilDiv.innerHTML = `
      <div class="tracking-card">
        <div class="tracking-header">
          <h3>📦 Nomor DO: ${hasil.nomorDO}</h3>
          <span class="status-label ${statusClass}">${icon} ${label}</span>
        </div>

        <p><b>Nama:</b> ${hasil.nama}</p>
        <p><b>Ekspedisi:</b> ${hasil.ekspedisi}</p>
        <p><b>Tanggal Kirim:</b> ${hasil.tanggalKirim}</p>
        <p><b>Total:</b> ${hasil.total}</p>

        <h4 style="margin-top:20px;">Riwayat Perjalanan:</h4>
        <ul class="timeline">${perjalananHTML}</ul>

        <div class="tracking-footer">
          Terakhir diperbarui: ${hasil.perjalanan.slice(-1)[0].waktu}
        </div>
      </div>
   `;
 });
});
