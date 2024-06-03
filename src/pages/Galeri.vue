<style scoped>
footer {
  width: 100%;
  background-color: #4e6f52;
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: justify;
}

.square-background {
  background-color: #e7dfca;
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
    <div style="width:80%;margin:auto">
   <h1
      class="mt-10 mb-10 font-bold  text-5xl"
      style="color: #4e6f52; font-family: 'Tajawal', sans-serif"
    >
      Galeri
    </h1>
    </div>

    <div style="display: flex; justify-content: center">
      <div style="width: 80%; display: flex; justify-content: center">
        <ul
          class="grid max-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"
        >
          <li>
            <a href="" class="block">
              <figure class="relative overflow-hidden">
                <img
                  src="../assets/TempatSholat.jpg"
                  alt="Volcano and lava field against a stormy sky"
                  class="object-cover rounded-lg w-full h-full transition duration-1000 hover:blur-md"
                />
                <figcaption
                  class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600"
                  style="font-family: 'Tajawal', sans-serif"
                >
                  Tempat Sholat
                </figcaption>
                <div
                  class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"
                ></div>
              </figure>
            </a>
          </li>
          <li>
            <a href="" class="block">
              <figure class="relative overflow-hidden">
                <img
                  src="../assets/Aula.jpg"
                  alt="Volcano and lava field against a stormy sky"
                  class="object-cover rounded-lg w-full h-full transition duration-1000 hover:blur-md"
                />
                <figcaption
                  class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600"
                  style="font-family: 'Tajawal', sans-serif"
                >
                  Aula
                </figcaption>
                <div
                  class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"
                ></div>
              </figure>
            </a>
          </li>
          <li>
            <a href="" class="block">
              <figure class="relative overflow-hidden">
                <img
                  src="../assets/WudhuPria.jpg"
                  alt="Volcano and lava field against a stormy sky"
                  class="object-cover rounded-lg w-full h-full transition duration-1000 hover:blur-md"
                />
                <figcaption
                  class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600"
                  style="font-family: 'Tajawal', sans-serif"
                >
                  Tempat Wudhu Pria
                </figcaption>
                <div
                  class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"
                ></div>
              </figure>
            </a>
          </li>
          <li>
            <a href="" class="block">
              <figure class="relative overflow-hidden">
                <img
                  src="../assets/WudhuWanita.jpg"
                  alt="Volcano and lava field against a stormy sky"
                  class="object-cover rounded-lg w-full h-full transition duration-1000 hover:blur-md"
                />
                <figcaption
                  class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg text-white transition opacity-0 duration-600"
                  style="font-family: 'Tajawal', sans-serif"
                >
                  Tempat Wudhu Wanita
                </figcaption>
                <div
                  class="absolute w-full h-full transition duration-300 scale-150 bg-gray-500 rounded-full opacity-0 top-1/2 left-1/2"
                ></div>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>

<AppFooter />
</template>
<script setup>
import AppBar from "../components/AppBar.vue";
import AppFooter from "../components/AppFooter.vue";
</script>