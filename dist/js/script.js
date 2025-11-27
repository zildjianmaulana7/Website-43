const modal = document.getElementById("modalEkskul");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

// Data ekskul (tinggal ganti isi sesuai kebutuhan)
const ekskulInfo = {
  "Paskhara": "Paskhara adalah ekstrakurikuler paskibra yang melatih kedisiplinan.",
  "Futsal": "Ekstrakurikuler futsal yang aktif mengikuti turnamen antar SMP.",
  "PMR": "Palang Merah Remaja, fokus pada pertolongan pertama dan kesehatan.",
  "Pramuka": "Ekstrakurikuler wajib untuk melatih kemandirian dan kebersamaan.",
  "Seni Tari": "Ekskul seni tari yang tampil di berbagai acara sekolah.",
  "Perisai Diri": "Beladiri tradisional Indonesia untuk melatih mental & fisik.",
  "Angklung": "Tim angklung kebanggaan sekolah.",
  "PKS": "Patroli Keamanan Sekolah, menjaga ketertiban lingkungan sekolah.",
  "Durema": "Drumband / Drum Corps SMPN 43 Bandung.",
  "Paduan Suara": "Tim paduan suara yang sering juara lomba vokal grup.",
  "Karawitan": "Seni musik tradisional Sunda.",
  "Bola Voli": "Ekskul olahraga voli aktif latihan rutin.",
  "Bola Basket": "Ekskul basket dengan berbagai prestasi.",
  "Stem IPA": "Kelompok riset dan eksperimen sains.",
  "Karate": "Beladiri karate dari tingkat dasar hingga sabuk tinggi.",
  "Taekwondo": "Beladiri Korea dengan latihan teknik tendangan."
};

// Ambil semua box
document.querySelectorAll(".ekskul-box .box").forEach(box => {
  box.addEventListener("click", () => {
    const title = box.querySelector("h2").innerText;
    
    modal.style.display = "flex";
    modalTitle.innerText = title;
    modalDesc.innerText = ekskulInfo[title] || "Informasi belum tersedia.";
  });
});

// Tombol close
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Klik luar modal untuk menutup
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
