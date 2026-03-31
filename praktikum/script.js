const btnNav = document.querySelector('.btn-nav'); //ini parameternya ngikutin nama kelas di html 
btnNav.addEventListener('click', function(e) {
  e.preventDefault();
  alert("Selamat datang di TaskFlow!"); //harus petik 2
});
//tiati dah naroh si js nya soalnya anuan


// Memilih h1 di dalam class hero-text
//karena di html gada id nya makannya pake query selector
const heading = document.querySelector('.hero-text h1'); //queri selector tuh bisa manggil class sama tag
    heading.innerText = 'TaskFlow – Solusi Tim Modern';


const cards = document.querySelectorAll('.feature-card');
//totalnya jadi 3 terus sama dengan nya diapus
//kenapa sama dengnnya dihapus karena biar dia ga nambah
let total = 0;
for (let i = 0; i < cards.length; i++) {
  total++;
}
console.log('Jumlah fitur: ' + total);

const btnCoba = document.querySelector('.btn-primary');
btnCoba.addEventListener('click', function(d) {
    btnCoba.innerText= 'Mendaftar';
    btnCoba.style.backgroundColor = '#94a3b8';

    //ngatur seberapa lama si btn anuannya
    setTimeout(() => {
        btnCoba.innerText='Coba gratis';
        btnCoba.style.backgroundColor= '';
    }, 1406); //lamanya
}
) 

//ini yg ga selesai di kelas, tapi nyobain aja
const kartu = document.querySelectorAll('.feature-card');
//ngeloop terus dikasih tempat di si kartu1
kartu.forEach(kartu1 => {
    kartu1.addEventListener('click', () => {

        // hapus active dari semua kartu
        kartu.forEach(k => k.classList.remove('active'));

        // tambahkan active ke yang diklik
        kartu1.classList.add('active');

    });
});


const input = document.getElementById('review-input');
const tombol = document.getElementById('review-btn');
const pesan = document.getElementById('review-msg');

tombol.addEventListener('click', () => {
    const nilai = input.value.trim();

    if (nilai.length === 0) {
        pesan.textContent = 'Ulasan tidak boleh kosong.';
        pesan.style.color = '#ef4444';

    } else if (nilai.length < 10) {
        pesan.textContent = 'Ulasan terlalu singkat. Minimal 10 karakter.';
        pesan.style.color = '#f97316';

    } else {
        pesan.textContent = 'Ulasan berhasil dikirim! Terima kasih.';
        pesan.style.color = '#22c55e';

        input.value = '';
    }
});




