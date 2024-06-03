<style scoped>
    footer {
      width: 100%;
      background-color: #4E6F52;
      padding: 2rem;
      margin-top: 5rem;
      margin-bottom: 0;
      text-align: justify;
    }

    .square-background {
      background-color: #E7DFCA;
      border-radius: 10px; 
      padding: 40px;
      padding-bottom: 20px;
      padding-top: 20px;
    }

    figure::after {
        border-radius: 50%;
        opacity: 1;
        transform: scale(0);
        transition: transform 900ms;
    }
    
    a:is(:hover, :focus) figure::after {
        transform: scale(2.5);
        filter: blur(100px);
    }
    
    a:is(:hover, :focus) figcaption {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity 600ms 400ms, transform 600ms 400ms;
    }
    
    a:is(:hover, :focus) img {
        transform: scale(1.2);
    }

    @media (min-width: 768px) {
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

</style>
<template>
    <AppBar />
<body>
    <h1 class="mt-10 mb-10 font-bold text-center text-7xl" style="color: #4E6F52; font-family: 'Tajawal', sans-serif;">Galeri</h1>
    <ul class="grid max-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <li>
            <a href="" class="block">
                <figure class="relative overflow-hidden">
                    <img src='../assets/TempatSholat.jpg' alt='Volcano and lava field against a stormy sky' class="object-cover w-full h-full transition duration-1000 hover:blur-md">
                    <figcaption class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600" style="font-family: 'Tajawal', sans-serif;">Tempat Sholat</figcaption>
                    <div class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"></div>
                </figure>
            </a>
        </li>
        <li>
            <a href="" class="block">
                <figure class="relative overflow-hidden">
                    <img src='../assets/Aula.jpg' alt='Volcano and lava field against a stormy sky' class="object-cover w-full h-full transition duration-1000 hover:blur-md">
                    <figcaption class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600" style="font-family: 'Tajawal', sans-serif;">Aula</figcaption>
                    <div class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"></div>
                </figure>
            </a>
        </li>
        <li>
            <a href="" class="block">
                <figure class="relative overflow-hidden">
                    <img src='../assets/WudhuPria.jpg' alt='Volcano and lava field against a stormy sky' class="object-cover w-full h-full transition duration-1000 hover:blur-md">
                    <figcaption class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600" style="font-family: 'Tajawal', sans-serif;">Tempat Wudhu Pria</figcaption>
                    <div class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"></div>
                </figure>
            </a>
        </li>
        <li>
            <a href="" class="block">
                <figure class="relative overflow-hidden">
                    <img src='../assets/WudhuWanita.jpg' alt='Volcano and lava field against a stormy sky' class="object-cover w-full h-full transition duration-1000 hover:blur-md">
                    <figcaption class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600" style="font-family: 'Tajawal', sans-serif;">Tempat Wudhu Wanita</figcaption>
                    <div class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"></div>
                </figure>
            </a>
        </li>
    </ul>
</body>


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
</template>
<script setup>
import AppBar from "../components/AppBar.vue";
</script>