<template>
    <AppBar />
    <div>
        <div class="content-wrapper p-4">
            <div class="header-content flex flex-col items-center">
                <div class="image-header mt-10">
                    <img src="../assets/bismillah.svg" alt="bismillah" />
                </div>
                <div class="header pt-10">
                    <h1 class="font-bold text-2xl text-center">
                        “Dengan menyebut nama ALLAH Yang Maha Pengasih lagi Maha Penyayang”
                    </h1>
                </div>
                <div class="definition-zakat pt-10 px-4 md:px-40 font-medium">
                    <p class="text-center text-xl">
                        Infaq merupakan tindakan mulia dengan memberikan sebagian harta yang dimiliki kepada sesama sebagai bentuk kepedulian dan kebaikan. 
                        Infaq adalah bukti nyata dari kemurahan hati dan kecintaan kepada sesama, sebagaimana yang diperintahkan oleh Allah SWT dalam Al-Quran, Surat Al-Baqarah ayat 267:
                    </p>
                </div>
                <br>
                <br>
                <div class="image-anbiya mt-10">
                    <img src="../assets/al-baqarah-267.svg" alt="Al baqarah 267" />
                </div>
                <div class="definition-zakat pt-10 px-4 md:px-40 font-medium mb-7">
                    <p class="text-center text-xl">
                        "Orang-orang yang menafkahkan hartanya di malam dan siang hari secara tersembunyi dan terang-terangan, maka bagi mereka pahala di sisi Tuhan mereka. Tidak ada kekhawatiran terhadap mereka, dan tidak (pula) mereka bersedih hati."
                    </p>
                </div>
                <div class="zakat-header flex justify-center md:justify-between items-center px-4 md:px-40 mt-10">
                    <div class="header-laporan font-semibold">
                        <h1 class="text-3xl text-[#4E6F52]">Laporan Infaq</h1>
                    </div>
                </div>  
                <div class="table-data w-full gap-8 justify-center px-4 md:px-40 mt-10">
                    <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-md rounded-[10px] cursor-pointer">
                        <tr class="text-xl font-semibold">
                                <td class="p-2">No.</td>
                                <td class="p-2">Nama</td>
                                <td class="p-2">Tanggal</td>
                                <td class="p-2">Petugas</td>
                                <td class="p-2">Jumlah</td>
                            </tr>
                        <tbody  v-for="(Infaq, index) in Infaqs" :key="index">
                        
                            <tr class="text-lg">
                                <td class="p-2">{{ index+1 }}</td>
                                <td class="p-2">{{ Infaq.title}}</td>
                                <td class="p-2">{{ Infaq.date }}</td>
                                <td class="p-2">{{ Infaq.name }}</td>
                                <td class="p-2">{{ Infaq.amount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import AppFooter from "../components/AppFooter.vue";
import { ref, onMounted } from "vue";

const Infaqs = ref([]);

const fetchInfaq = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/infaq`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    Infaqs.value = data.data.data;
    totalInfaq.value = data.totalInfaq;
  } catch (error) {
    console.error("There was a problem fetching the Infaq:", error);
}
};

onMounted(fetchInfaq);
</script>