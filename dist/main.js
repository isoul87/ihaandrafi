AOS.init();
  
  
  const targetDate = new Date("Oct 3, 2025 08:00:00").getTime();

  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Acara Telah Berlangsung";
    }
  }, 1000);

  const btnFilter = document.querySelectorAll("nav div a");


btnFilter.forEach(data => {
    data.onclick = () => {
        btnFilter.forEach(data => {
         data.classList.remove("text-pink-600");   
        });
         data.classList.toggle("text-pink-600");

    };
});

// Tombol music

// --- LOGIKA JAVASCRIPT ---
        const music = document.getElementById('background-music');
        const toggleButton = document.getElementById('sound-toggle');
        const soundOnIcon = document.getElementById('sound-on-icon');
        const soundOffIcon = document.getElementById('sound-off-icon');

        // Browser modern sering memblokir autoplay sampai pengguna berinteraksi
        // Fungsi ini akan mencoba memutar musik saat pengguna mengklik di mana saja
        function playMusicOnFirstInteraction() {
            // Cek jika musik belum pernah dimulai
            if (music.paused) {
                music.play().catch(error => {
                    console.log("Autoplay dicegah oleh browser. Musik akan dimulai saat tombol diklik.");
                });
            }
            // Hapus event listener ini setelah dijalankan sekali
            document.body.removeEventListener('click', playMusicOnFirstInteraction);
        }
        
        document.body.addEventListener('click', playMusicOnFirstInteraction);


        // Fungsi untuk mematikan/menyalakan suara
        function toggleSound() {
            if (music.muted) {
                music.muted = false;
                soundOnIcon.classList.remove('hidden');
                soundOffIcon.classList.add('hidden');
            } else {
                music.muted = true;
                soundOnIcon.classList.add('hidden');
                soundOffIcon.classList.remove('hidden');
            }
        }

        toggleButton.addEventListener('click', toggleSound);