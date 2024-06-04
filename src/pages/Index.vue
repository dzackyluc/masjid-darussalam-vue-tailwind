<template>
  <AppBar />
  <div
    class="background-image md:bg-cover bg-contain bg-no-repeat h-screen w-full" style="height: 70vh;"
  ></div>
  <div
    class="bg-white flex rounded-3xl mb-24 md:text-xl items-center md:-mt-20 mt-[-480px] md:w-1/2 w-11/12 m-auto md:h-40 h-50 drop-shadow-md cursor-pointer transition transform hover:-translate-y-1 hover:scale-103 duration-300 justify-center text-green-800"
  >
    <div class="img-profile m-5 md:w-[350px]">
      <center>
        <img
          src="../assets/sholat.png"
          alt="Sholat Image"
          style="width: 70%; object-fit: cover; border-radius: 10px"
        />
      </center>
    </div>
    <div class="detail-card p-3">
      <div class="header font-semibold text-2xl mb-2">
        <h1>Masjid Jami' Darussalam</h1>
      </div>
      <div
        class="text-gray-500 text-base long-and-truncated justify-start"
        style="font-size: 15px"
      >
        Selamat datang di Masjid Jami Darussalam, sebuah tempat ibadah yang
        telah menjadi simbol kedamaian selama hampir lima tahun. Di tengah arus
        waktu yang tak kenal henti, Masjid Jami Daruussalam berdiri sebagai
        titik tenang.
      </div>
    </div>
  </div>
  <div
    class="grid md:grid-cols-4 grid-cols-2 my-28 m-auto w-11/12"
    style="width: 90%"
  >
    <div class="col-span-2 font-bold text-wrap text-xl md:text-2xl">
      Jadwal sholat di daerah terdekat anda.
    </div>
    <div class="col-span-2 text-wrap md:text-xl text-gray-500">
      “Jangan pernah melewatkan ibadah dan shalat. Karena ada jutaan manusia di
      alam kubur yang ingin dihidupkan kembali hanya untuk beribadah dan bisa
      sholat kembali.”
    </div>
  </div>
  <div class="grid md:grid-cols-4 grid-cols-2 m-auto gap-28 w-11/12">
    <div class="p-5 col-span-2">
      <div class="bg-white mb-5 drop-shadow-md flex-1 border rounded-lg p-5">
        <div
          v-if="Fajr"
          v-for="(item, key, index) in Fajr"
          :key="index"
          class="bg-[#4E6F52] text-white border my-3 rounded-lg w-full"
        >
          <div class="flex px-7 items-center justify-between h-14">
            <div
              class="text-white font-bold col-span-1 text-2xl m-3 flex items-center gap-3"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg>
              </div>
              <div>
                {{ item[0] }}
              </div>
            </div>
            <div class="text-white col-span-1 text-end text-xl m-3">
              {{ item[1] }}
            </div>
          </div>
        </div>
        <div v-else class="bg-white border my-3 rounded-lg w-full">
          <div class="flex px-7 items-center justify-between h-14">
            <div
              class="text-gray-800 font-bold col-span-1 text-2xl m-3 flex items-center gap-3"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg>
              </div>
              <div
                class="bg-gray-300 animate-pulse h-4 rounded-full w-16"
              ></div>
            </div>
            <div class="bg-gray-300 animate-pulse h-4 rounded-full w-16"></div>
          </div>
        </div>
      </div>
      <div class="bg-white drop-shadow-md border flex-1 rounded-lg p-5">
        <div
          v-if="jadwal"
          v-for="(item, key, index) in jadwal"
          :key="index"
          class="bg-white border my-3 rounded-lg w-full"
        >
          <div class="flex px-7 items-center justify-between mb-3 h-14">
            <div
              class="text-gray-800 font-bold col-span-1 text-2xl m-3 flex items-center gap-3"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg>
              </div>
              <div>
                {{ key }}
              </div>
            </div>
            <div class="text-gray-700 col-span-1 text-end text-xl m-3">
              {{ item }}
            </div>
          </div>
        </div>
        <div
          v-else
          v-for="n in 6"
          :key="n"
          class="bg-white border my-3 rounded-lg w-full"
        >
          <div class="flex px-7 items-center justify-between mb-3 h-14">
            <div
              class="text-gray-800 font-bold col-span-1 text-2xl m-3 flex items-center gap-3"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg>
              </div>
              <div
                class="bg-gray-300 animate-pulse h-4 rounded-full w-16"
              ></div>
            </div>
            <div class="bg-gray-300 animate-pulse h-4 rounded-full w-16"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="bg-white flex-1 rounded-lg">
        <center>
          <img
            src="../assets/masjid-indoor.png"
            class=""
            style="width: 640px"
          />
        </center>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <div class="pb-12">
    <div>
      <div class="flex justify-between pt-12 pb-9 px-16">
          <div class="text-4xl font-bold text-green-800">Blog</div>
            <div class="text-right">
                <button
                @click="$router.push('/blog')"
                class="bg-green-800 hover:bg-gray-400 hover:text-black text-white rounded-xl h-10 w-32"
                >
                Lihat Semua
                </button>
            </div>
      </div>  
      <div class="flex flex-wrap mx-10 gap-10">
        <div
          v-if="blog"
          v-for="(item, index) in blog.slice(0, 3)"
          :key="index"
          class="container md:flex-1 col-span-2 transition transform hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
        >
          <div
            @click="$router.push(`/blog/read?id=${item.id}`)"
            class="rounded-[15px] overflow-hidden shadow-lg bg-white"
          >
            <img
              class="w-full"
              :src="getImagePath('blog', item.thumbnail)"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ item.title }}</div>
              <div
                class="text-gray-700 text-base long-and-truncated text-justify"
              >
                {{ stripHTML(item.content) }}
              </div>
            </div>
            <br />
            <div class="p-9">
              <button
                @click="$router.push(`/blog/read?id=${item.id}`)"
                class="bg-green-800 hover:bg-gray-400 hover:text-black text-white rounded-xl h-10 w-full"
              >
                Baca Disini
              </button>
            </div>
          </div>
        </div>
        <div
          v-else
          v-for="n in 3"
          :key="n"
          class="container md:col-span-1 md:flex-1 col-span-2"
        >
          <div class="rounded overflow-hidden shadow-lg bg-white">
            <div class="bg-gray-400 h-32 w-full animate-pulse"></div>
            <div class="px-6 py-4">
              <div
                class="bg-gray-200 h-5 rounded-full animate-pulse mb-2"
              ></div>
              <div class="bg-gray-200 animate-pulse truncate h-32"></div>
            </div>
            <div class="p-9">
              <button
                class="bg-gray-400 rounded-xl animate-pulse h-10 w-full"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <div class="px-16 pt-16 w-full">
    <div class="text-4xl font-bold text-green-800">Kegiatan</div>
    <div class="pt-7 w-full">
      <div v-if="activities" class="grid grid-cols-2 grid-rows-4 gap-4">
        <div class="row-span-4 lg:col-span-1 col-span-2">
          <div
            class="p-10 grid grid-cols-2 place-content-center h-full w-full rounded-xl shadow-xl border"
          >
            <div
              :class="'rounded-b md:p-4 justify-between leading-normal col-span-2'"
            >
              <div class="mb-5">
                <div class="text-gray-900 text-center font-bold text-3xl">
                  {{ activities[0].title }}
                </div>
                <div class="text-gray-900 text-center text-xl mb-2">
                  {{ new Date(activities[0].start_date).toLocaleDateString() }}
                  |
                  {{ new Date(activities[0].start_date).toLocaleTimeString() }}
                </div>
                <p class="text-gray-700 h-6 rounded-full text-center my-5">
                  {{ activities[0].description }}
                </p>
                 <br>
            <br>
              </div>
            </div>
           
          </div>
        </div>
        <div
          v-for="(item, index) in activities.slice(1, 5)"
          :key="index"
          class="row-span-1 col-span-1 place-content-center"
        >
          <button class="p-8 rounded-xl w-full flex flex-wrap justify-center shadow-md border">
            <div class="w-24 bg-white rounded text-start">
              <div class="text-bold text-xl">
                {{ new Date(item.start_date).toDateString().substring(4, 10) }}
              </div>
              <div class="text-base">
                {{ new Date(item.start_date).toDateString().substring(0, 3) }}
              </div>
            </div>
            <div class="w-full">
              <div class="text-bold text-xl">{{ item.title }}</div>
              <div class="text-base">
                {{ new Date(item.start_date).toLocaleTimeString() }}
              </div>
            </div>
          </button>
        </div>
        <div class="flex justify-end col-span-2">
            <button
                @click="$router.push('/activity')"
                :class="'bg-green-800 hover:bg-gray-400 hover:text-black text-white rounded-xl h-10 w-32 ' + (activities >= 4 ? 'hidden' : '')"
                >
                Lihat Semua
                </button>
        </div>
      </div>
      <div v-else class="grid grid-cols-2 grid-rows-4 gap-4">
        <div class="row-span-4 lg:col-span-1 col-span-2">
          <div class="grid grid-cols-2 h-full w-full rounded-xl bg-white border shadow-xl">
            <div
              class="bg-gray-300 animate-pulse rounded-md h-full w-full col-span-1 bg-cover"
            ></div>
            <div class="rounded-b p-4 justify-between leading-normal">
              <div class="mb-5">
                <div class="bg-gray-300 animate-pulse h-8 rounded-full"></div>
                <div
                  class="bg-gray-300 animate-pulse h-6 mt-1 rounded-full mb-10"
                ></div>
                <p
                  v-for="n in 8"
                  :key="n"
                  class="bg-gray-300 animate-pulse h-6 rounded-full mb-5"
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="n in 4"
          :key="n"
          class="row-span-1 col-span-1 place-content-center"
        >
          <div class="p-8 rounded-xl w-full bg-white flex border shadow-sm">
            <div
              class="w-24 pl-3 h-14 bg-gray-300 animate-pulse text-start"
            ></div>
            <div class="w-full pl-4 h-14">
              <div class="bg-gray-300 h-6 animate-pulse rounded-full"></div>
              <div
                class="bg-gray-300 h-6 animate-pulse w-32 rounded-full mt-5"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <br /><br />
  <br /><br />
  <div class="p-16 pb-28">
    <div class="flex" style="margin: auto; flex-wrap: wrap">
      <div
        style="
          flex: 1;
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        "
      >
        <div
          @click="$router.push('/infaq')"
          style="width: 300px"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <center>
            <svg
              style="width: 130px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
              />
            </svg>

            <h5
              class="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Layanan Infaq
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Jamaah Masjid Darussalam dapat melihat infaq yang telah disalurkan
              melalui website
            </p>
          </center>
        </div>

        <div
          @click="$router.push('/zakat')"
          style="width: 300px"
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <center>
            <i class="bi bi-cash-coin" style="font-size: 100px"></i>

            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Layanan Zakat
            </h5>

            <p class="font-normal text-gray-700 dark:text-gray-400">
              Jamaah Masjid Darussalam dapat menyalurkan zakatnya melalui
              website
            </p>
          </center>
        </div>
      </div>

      <div style="flex: 1">
        <h3 class="text-xl font-bold text-slate-500">
          Layanan Masjid Jami Darussalam
        </h3>
        <br />
        <h1 class="text-3xl font-bold">
          Layanan yang Terdapat pada Masjid Jami Darussalam
        </h1>
        <br />
        <br />
        <p class="text-justify">
          Anda dapat dengan mudah melakukan layanan zakat dan infaq melalui
          berbagai cara yang nyaman dan aman. Salah satunya adalah dengan
          menghubungi kontak kami, di mana tim kami siap membantu Anda dalam
          proses ini. Selain itu, kami juga menyediakan fasilitas pembayaran
          online yang terintegrasi dengan Payment Gateway Midtrans, memudahkan
          Anda untuk melakukan transaksi secara elektronik dengan aman dan
          efisien.
        </p>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import { get } from "jquery";
import AppBar from "../components/AppBar.vue";
import AppFooter from "../components/AppFooter.vue";

const stripHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const getImagePath = (folder, imagePath) => {
  return import.meta.env.VITE_BASE_IMG_URL + folder + "/" + imagePath;
};
</script>

<script>
export default {
  data() {
    return {
      jadwal: null,
      blog: null,
      activities: null,
      Fajr: null,
      fulljadwal: null,
      button: false,
    };
  },

  methods: {
    showSweetAlert() {
      Swal.fire("Sweet Alert is working");
    },

    async getSholat() {
      try {
        const response = await get(
          `${import.meta.env.VITE_BASE_URL}/api/prayer-time`
        );
        this.fulljadwal = response.data.timings;
        const result = Object.fromEntries(
          Object.entries(response.data.timings).slice(2, 8)
        );
        this.Fajr = Object.entries(response.data.timings).slice(0, 1);
        this.jadwal = result;
        console.log(this.fulljadwal);
      } catch (error) {
        console.log(error);
        console.log("Tidak Dapat Mengambil Data Jadwal Sholat");
      }
    },

    async getBlog() {
      try {
        const response = await get(`${import.meta.env.VITE_BASE_URL}/api/blog`);
        this.blog = response.data.data;
        console.log(this.blog);
      } catch (error) {
        console.log(error);
        console.log("Tidak Dapat Mengambil Data Blog");
      }
    },

    async getActivities() {
      try {
        const response = await get(
          `${import.meta.env.VITE_BASE_URL}/api/activity`
        );
        this.activities = response.data.data;
        console.log(this.activities);
      } catch (error) {
        console.log(error);
        console.log("Tidak Dapat Mengambil Data Kegiatan");
      }
    },
  },

  mounted() {
    this.getSholat();
    this.getBlog();
    this.getActivities();
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../assets/mosque-bg.jpg");
  background-position-y: -1250px;
}

@media screen and (max-width: 768px) {
  .background-image {
    background-position-y: -400px;
    width: 100%;
    height: 400px;
    background-size: cover;
    position: relative;
    margin-bottom: 400px;
  }
}

body {
  overflow-x: hidden;
}

.long-and-truncated {
  display: inline;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word; /* Important for long words! */
}
</style>
