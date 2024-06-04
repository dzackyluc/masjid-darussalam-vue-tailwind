<template>
  <footer>
    <div
      class="max-w-screen-xl px-4 py-2 mx-auto space-y-2 sm:px-6 lg:space-y-2 lg:px-1"
    >
      <div class="flex gap-10 justify-between flex-wrap">
        <div class="square-background">
          <div class="text-teal-600">
            <img class="h-12" src="../assets/logo-appbar.png" alt="Logo" />
          </div>

          <p
            class="max-w-xs mt-4"
            style="
              color: #4e6f52;
              text-align: left;
              font-family: 'Tajawal', sans-serif;
            "
          >
            Jl. Komp. Bukit Cengkeh Berbunga No. Raya, Bakti Jaya, Kec.
            Sukmajaya, Kota Depok, Jawa Barat 16418
          </p>
        </div>
        <div>
          <div class="flex" style="gap: 50px; flex-wrap: wrap; width: 100%">
            <div>
              <a
                href="#"
                class="font-medium text-white hover:text-teal-600"
                style="font-family: 'Tajawal', sans-serif"
                >Home</a
              >
            </div>
            <div>
              <a
                href="#"
                class="font-medium text-white hover:text-teal-600"
                style="font-family: 'Tajawal', sans-serif"
                >Profile</a
              >
            </div>
            <div>
              <a
                href="#"
                class="font-medium text-white hover:text-teal-600"
                style="font-family: 'Tajawal', sans-serif"
                >Galeri</a
              >
            </div>
            <div>
              <a
                href="#"
                class="font-medium text-white hover:text-teal-600"
                style="font-family: 'Tajawal', sans-serif"
                >Zakat</a
              >
            </div>
            <div>
              <a
                href="#"
                class="font-medium text-white hover:text-teal-600"
                style="font-family: 'Tajawal', sans-serif"
                >Infaq</a
              >
            </div>
          </div>
          <br />
          <br />
          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-6"
          ></div>
          <div class="flex">
            <i class="text-white bi bi-telephone"></i>
            <p
              class="ml-2 mr-5 font-medium text-white"
              style="font-family: 'Tajawal', sans-serif"
            >
              081234567890
            </p>
            <i class="text-white bi bi-envelope"></i>
            <p
              class="ml-2 font-medium text-white"
              style="font-family: 'Tajawal', sans-serif"
            >
              masjid@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


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