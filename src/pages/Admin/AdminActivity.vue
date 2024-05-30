
<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

const Activitys = ref([]);
const newActivity = ref({
  title: "",
  description: "",
  start_date: "",
  end_date: "",
});

// const getImagePath = (folder,imagePath) => {
//   return import.meta.env.VITE_BASE_IMG_URL + folder+ '/'+imagePath;
// };

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
const token = "5|UdKTrtRSq0WUF2DWszEuBpd5LsHOPYfTnTTcEjlO089d5a97";

const addActivity = async () => {
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
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Activitys.value.push(data.data);
    resetForm();
  } catch (error) {
    console.error("There was a problem adding the blog:", error);
  }
};

const deleteActivity = async (ActivityId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/activity/${ActivityId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    Activitys.value = Activitys.value.filter(
      (Activity) => Activity.id !== ActivityId
    );
  } catch (error) {
    console.error("There was a problem deleting the Activity:", error);
  }
};

const resetForm = () => {
  newActivity.value = {
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  };
  document.getElementById("formFile").value = null;
};

onMounted(fetchActivitys);
</script>


<template>
  <header claszs="mb-3">
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
        <div class="d-flex flex-wrap gap-5">
          <div
            class="d-flex flex-wrap"
            v-for="Activity in Activitys"
            :key="Activity.id"
          >
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">{{ Activity.title }}</h5>
                <p class="card-description">{{ Activity.description }}</p>
                <br />
                <br />
                <div class="d-flex justify-content-end gap-2">
                  <button
                    @click="editActivity(Activity)"
                    class="btn btn-primary block"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteActivity(Activity.id)"
                    class="btn btn-primary block"
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
              <h2 class="card-title">Add Activity</h2>
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
                  <!-- <Editor  v-model="newActivity.description"
                    api-key="okc1krocsefjl2o7r6w7lhme6h85v46r85b1iar6x1m1rdn1"
                    :init="{
                      toolbar_mode: 'sliding',
                      plugins:
                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                      toolbar:
                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }"
                    initial-value="Welcome to TinyMCE!"
                  /> -->

                  <div class="form-group">
                    <button
                      class="btn btn-primary block"
                      style="margin-top: 0.5rem; width: 100%"
                    >
                      Tambah
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
