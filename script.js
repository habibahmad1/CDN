function copyText(button) {
  let textarea = button.previousElementSibling; // Mengambil elemen textarea sebelum tombol
  textarea.select(); // Memilih teks di dalam textarea
  document.execCommand("copy"); // Menyalin teks yang dipilih ke clipboard
  alert("Teks telah disalin: " + textarea.value); // Menampilkan pesan alert
}

const tahun = document.querySelector(".tahun");
const tahunIni = new Date();
const ambilTahun = tahunIni.getFullYear();
tahun.innerHTML = ambilTahun;
