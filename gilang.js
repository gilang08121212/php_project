// Mendapatkan elemen hero
const heroSection = document.getElementById('hero');

// Fungsi untuk mengatur ukuran gambar latar
function setHeroBackground() {
    // Mengatur latar belakang agar sesuai dengan ukuran layar
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center center';
    heroSection.style.backgroundRepeat = 'no-repeat';
}

// Memanggil fungsi saat halaman dimuat
window.onload = setHeroBackground;

// Memanggil fungsi saat ukuran layar berubah (misalnya saat pengguna mengubah ukuran jendela)
window.onresize = setHeroBackground;
