<template>
    <div>
        <AppBar />
        <div class="container flex flex-col">
            <div class="button-header flex flex-row justify-center m-10 gap-8 items-center">
                <button
                    class="flex items-center justify-center h-[50px] w-[300px] font-medium shadow-md text-xl bg-[#4E6F52]   transition transform hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer rounded-[25px] text-white max-sm:mt-12"
                    data-el="button-1" id="button-hari-ini"
                >
                    Hari ini
                </button>
                <button
                    class="flex items-center justify-center h-[50px] w-[300px]  font-medium shadow-md text-xl bg-[#F6EFE5] transition transform hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer rounded-[25px] text-black max-sm:mt-12"
                    data-el="button-2" id="button-akan-datang"
                >
                    Akan Datang
                </button>
            </div>
            <br>
            <div id="table-kegiatan-coming" class="table-kegiatan-coming justify-center items-center mt-10 hidden">
                <div v-for="(Activity, index) in ActivitysUpcoming"
                    :key="index" class="m-50">
                        <h1 class="text-3xl flex justify-center">{{index}}</h1>
                        <div class="flex flex-wrap gap-7 p-10 justify-center ">
                        <div v-for="item in ActivitysUpcoming[index]" :key="item.id">
                            <table class="table-auto text-center w-12rem bg-[#F6EFE5] p-100 shadow-lg rounded-[10px] cursor-pointer">
                                <!-- <thead class="bg-[#4E6F52] rounded-[15px]">
                                    <tr class="p-5">
                                        <th class="w-1/12 p-2 text-white text-2xl" colspan="2">Juni 2024</th>
                                    </tr>
                                </thead> -->
                                <tbody>
                                    <tr><img src=""></tr>
                                    <tr>
                                        <td class="p-5 text-[#4E6F52] font-bold">Nama Kegiatan</td>
                                        <td class="p-5 font-medium">{{ item.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="p-5 text-[#4E6F52] font-bold">Tanggal Kegiatan</td>
                                        <td class="p-5 font-medium">{{ item.start_date.split(' ')[0] }}</td>
                                    </tr>
                                    <tr>
                                        <td class="p-5 text-[#4E6F52] font-bold">Waktu Mulai</td>
                                        <td class="p-5 font-medium">{{ item.start_date.split(' ')[1] }}</td>
                                    </tr>
                                    <tr>
                                        <td class="p-5 text-[#4E6F52] font-bold">Waktu Selesai</td>
                                        <td class="p-5 font-medium">{{ item.end_date.split(' ')[1] }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="card-kegiatan-today" v-for="(Activity, index) in ActivitysToday"
                    :key="index" class="card-kegiatan-today flex flex-col justify-center items-center w-full mt-10">
                    <div v-for="item in ActivitysToday[index]" :key="item.id" class="card bg-[#F6EFE5] shadow-md rounded-lg overflow-hidden w-1/2">
                        <div class="p-6 cursor-pointer hover:shadow-lg">
                            <h2 class="text-2xl font-semibold text-gray-800">{{ item.title }}</h2>
                            <p class="text-gray-600 mt-4">{{ item.description }}</p>
                            <p class="text-gray-500 mt-2">Time: {{ item.start_date }}-{{ item.end_date.split('')[1] }}</p>
                        </div>
                </div>
            </div>
        </div>
        <AppFooter />
    </div>

</template>

<script setup>
import AppBar from '../components/AppBar.vue';
import AppFooter from '../components/AppFooter.vue';
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

const token = localStorage.getItem("authToken");

const Activitys = ref([]);
const ActivitysToday = ref([]);
const ActivitysUpcoming = ref([]);
const newActivity = ref({
  title: "",
  description: "",
  start_date: "",
  end_date: "",
});
const isEditing = ref(false);
const currentActivityId = ref(null);

const fetchActivitysUpcoming = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/activity?type=coming`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    ActivitysUpcoming.value = data.data;
    console.log(data.data);
  } catch (error) {
    console.error("There was a problem fetching the Activitys:", error);
  }
};

const fetchActivitysToday = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/activity?type=today`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    ActivitysToday.value = data.data;
  } catch (error) {
    console.error("There was a problem fetching the Activitys:", error);
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const [weekday, day, month, year] = formattedDate.split(" ");
  return `${weekday} ${day} ${month} ${year}`;
};

onMounted(()=>{
    fetchActivitysUpcoming();
    fetchActivitysToday();
    document.getElementById('button-hari-ini').addEventListener('click', function() {
            document.getElementById('card-kegiatan-today').classList.remove('hidden');
            document.getElementById('table-kegiatan-coming').classList.add('hidden');
            this.classList.add('bg-[#4E6F52]', 'text-white');
            document.getElementById('button-akan-datang').classList.remove('bg-[#4E6F52]', 'text-white');
            document.getElementById('button-hari-ini').classList.remove('bg-[#F6EFE5]');
            document.getElementById('button-akan-datang').classList.add('bg-[#F6EFE5]', 'text-black');
        });

    document.getElementById('button-akan-datang').addEventListener('click', function() {
            document.getElementById('table-kegiatan-coming').classList.remove('hidden');
            document.getElementById('card-kegiatan-today').classList.add('hidden');
            this.classList.add('bg-[#4E6F52]', 'text-white');
            document.getElementById('button-hari-ini').classList.remove('bg-[#4E6F52]', 'text-white');
            document.getElementById('button-akan-datang').classList.remove('bg-[#F6EFE5]');

            document.getElementById('button-hari-ini').classList.add('bg-[#F6EFE5]', 'text-black');
        });
});
</script>

