<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

const token = localStorage.getItem("authToken");

const Activitys = ref([]);
const newActivity = ref({
  title: "",
  description: "",
  start_date: "",
  end_date: "",
});
const isEditing = ref(false);
const currentActivityId = ref(null);

const fetchActivitys = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/activity`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Activitys.value = data.data.data;
  } catch (error) {
    console.error("There was a problem fetching the Activitys:", error);
  }
};

const handleFileUpload = (event) => {
  newActivity.value.image = event.target.files[0];
};

const addActivity = async () => {

  Swal.showLoading();


  if (isEditing.value) {
    updateActivity();
  } else {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + token);

      const raw = JSON.stringify({
        title: newActivity.value.title,
        description: newActivity.value.description,
        start_date: newActivity.value.start_date,
        end_date: newActivity.value.end_date,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/activity`,
        requestOptions
      );
      if (!response.ok) {
        Swal.fire({
            icon: "Ada field yang belum diisi",
            title: "Berhasil",
            text: "Data Zakat gagal ditambahkan",
          });
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      Activitys.value.push(data.data);
      resetForm();

      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data Kegiatan berhasil ditambahkan",
      });

    } catch (error) {
      console.error("There was a problem adding the activity:", error);
    }
  }
};

const editActivity = (activity) => {
  isEditing.value = true;
  currentActivityId.value = activity.id;
  newActivity.value = {
    title: activity.title,
    description: activity.description,
    start_date: activity.start_date,
    end_date: activity.end_date,
  };
};

const updateActivity = async () => {
  Swal.showLoading();

  try {
    console.log("Updating activity with ID:", currentActivityId.value); // Debugging ID
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      title: newActivity.value.title,
      description: newActivity.value.description,
      start_date: newActivity.value.start_date,
      end_date: newActivity.value.end_date,
    });

    console.log("Payload:", raw); // Debugging payload

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/activity/${currentActivityId.value}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Response data:", data); // Debugging response

    const index = Activitys.value.findIndex(activity => activity.id === currentActivityId.value);
    Activitys.value[index] = data.data;
    resetForm();
    Swal.close();
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Data Kegiatan berhasil diupdate",
    });
  } catch (error) {
    console.error("There was a problem updating the activity:", error);
  }
};

const deleteActivity = async (ActivityId) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
   
    confirmButtonText: "Ya, hapus!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.showLoading();

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/activity/${ActivityId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        Activitys.value = Activitys.value.filter(
          (Activity) => Activity.id !== ActivityId
        );
        Swal.close();
        Swal.fire("Deleted!", "Data Kegiatan berhasil dihapus.", "success");
      } catch (error) {
        console.error("There was a problem deleting the Activity:", error);
      }
    }
  });
};

const resetForm = () => {
  newActivity.value = {
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  };
  isEditing.value = false;
  currentActivityId.value = null;
};
const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const [weekday, day, month, year] = formattedDate.split(" ");
  return `${weekday} ${day} ${month} ${year}`;
};

onMounted(fetchActivitys);
</script>

<template>
  <header class="mb-3">
    <a href="#" class="burger-btn d-block d-xl-none">
      <i class="bi bi-justify fs-3"></i>
    </a>
  </header>
  <div class="page-title">
    <div class="row">
      <div class="col-12 col-md-6 order-md-2 order-first">
        <nav aria-label="breadcrumb" class="breadcrumb-header float-start">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Kegiatan</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-12">
    <div class="row">
      <div class="col-lg-6">
        <div class="d-flex flex-wrap gap-2">
          <div
            class="d-flex flex-wrap"  
            v-for="Activity in Activitys"
            :key="Activity.id"
          >
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">{{ Activity.title }}</h5>
                <br />

              <span>{{ formatDate(Activity.start_date) }}</span> <br> <span>{{ formatDate(Activity.end_date) }}</span>
                    <br />
                <br />
                <p class="card-description">{{ Activity.description }}</p>
            
                <br />

                <div class="d-flex justify-content-end gap-2">
                  <button
                    @click="editActivity(Activity)"
                    class="btn btn-primary rounded-[15px] block"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteActivity(Activity.id)"
                    class="btn btn-danger rounded-[15px] block"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4 col-lg-6 col-md-4">
        <section class="section">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">{{ isEditing ? 'Edit Kegiatan' : 'Add Kegiatan' }}</h2>
            </div>

            <div class="card-body">
              <div class="row">
                <form @submit.prevent="addActivity">
                  <div class="form-group">
                    <input
                      v-model="newActivity.title"
                      type="text"
                      class="form-control"
                      placeholder="Judul Kegiatan"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="newActivity.description"
                      type="text"
                      class="form-control"
                      placeholder="Deskripsi Kegiatan"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="newActivity.start_date"
                      type="datetime-local"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="newActivity.end_date"
                      type="datetime-local"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-primary block"
                      style="margin-top: 0.5rem; width: 100%"
                    >
                      {{ isEditing ? 'Update' : 'Tambah' }}
                    </button>
                    <button
                      type="button"
                      @click="resetForm"
                      v-if="isEditing"
                      class="btn btn-secondary block"
                      style="margin-top: 0.5rem; width: 100%"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>






<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>
