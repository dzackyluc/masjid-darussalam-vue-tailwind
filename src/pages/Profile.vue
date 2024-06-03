<style scoped>
.curved-border {
  border-radius: 10px;
}

.square-background {
      background-color: #E7DFCA;
      border-radius: 10px; 
      padding: 40px;
      padding-bottom: 20px;
      padding-top: 20px;
    }

section {
  width: 100%;
  background-color: #E7DFCA;
  color: #4E6F52;
  padding: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  margin-top: 8rem;
}

footer {
      width: 100%;
      background-color: #4E6F52;
      padding: 2rem;
      margin-bottom: 0;
      text-align: justify;
    }
</style>
<template>
  <AppBar />
<body class="flex flex-col items-center justify-start min-h-screen pt-16 bg-gray-100">
  <h1 class="mb-4 text-3xl font-bold text-center text-primary" style="color: #4E6F52; font-family: 'Tajawal', sans-serif;">MASJID DARUSSALAM SUKMAJAYA DEPOK</h1>
  <div class="flex flex-col w-full gap-4 mt-8 md:flex-row md:w-3/4">
    <img src="../assets/hero.jpeg" alt="Profil" class="object-cover w-full h-auto border border-black md:w-1/2 curved-border rounded-3xl">
    <p class="w-full text-lg leading-normal text-justify text-gray-800 md:text-xl md:w-1/2" style="font-family: 'Tajawal', sans-serif;">Selamat datang di Masjid Jami Darussalam, sebuah tempat ibadah yang telah menjadi simbol kedamaian selama hampir lima tahun. Di tengah arus waktu yang tak kenal henti, Masjid Jami Daruussalam berdiri sebagai titik tenang. Sejak berdiri, masjid ini telah menjadi pusat spiritual bagi masyarakat sekitar, menyediakan tempat untuk beribadah, belajar, dan bersatu dalam kebaikan.
    Masjid yang terletak di Kecamatan Sukmajaya, Depok ini tidak hanya memuliakan ibadah, tetapi juga memuliakan janji-janji suci yang digunakan dalam kehidupan sehari-harii dengan komitmen untuk menjadi teladan dalam kejujuran dan kepercayaan, menginspirasi orang-orang untuk menjalani hidup dengan integritas yang kokoh.</p>
  </div>
  <section class="p-8 text-green-700 bg-yellow-200 rounded-lg">
    <h2 class="flex items-center mb-5 text-3xl" style="font-family: 'Tajawal', sans-serif; width: 100%; display: inline-block;">
    <i class="mr-2 text-2xl bi bi-geo-alt-fill"></i>
    <strong>LOKASI</strong>
  </h2>

    <div class="gmap-canvas">
        <iframe width="100%" height="520" id="gmap-canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.2837060594082!2d106.8466693!3d-6.376591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec743db0710f%3A0xf6683d26887b61f4!2sMasjid%20Jami&#39;%20Darussalam!5e0!3m2!1sid!2sid!4v1717254027991!5m2!1sid!2sid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
  </section>
  <footer>
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-2 lg:px-1">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-4">
        <div class="square-background">
          <div class="text-teal-600">
            <img class="h-12" src="../assets/logo-appbar.png" alt="Logo">
          </div>
      
          <p class="max-w-xs mt-4" style="color: #4E6F52; text-align:left; font-family: 'Tajawal', sans-serif;" >
            Jl. Komp. Bukit Cengkeh Berbunga No. Raya, Bakti Jaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16418
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-10 ml-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-6">
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Home</a>
          </div>
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Profile</a>
          </div>
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Galeri</a>
          </div>
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Zakat</a>
          </div>
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Infaq</a>
          </div>
          <div>
            <a href="#" class="font-medium text-white hover:text-teal-600" style="font-family: 'Tajawal', sans-serif;">Reservasi</a>
          </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-6"></div>
          <div class="flex">
            <i class="text-white bi bi-telephone"></i>
            <p class="ml-2 mr-20 font-medium text-white" style="font-family: 'Tajawal', sans-serif;">081234567890</p>
            <i class="text-white bi bi-envelope"></i>
            <p class="ml-2 font-medium text-white" style="font-family: 'Tajawal', sans-serif;">masjidjamidarusslam@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>
</template>
<script setup>
import AppBar from "../components/AppBar.vue";
</script>