<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import DataTable from 'datatables.net-bs5';
// import "datatables.net-dt/css/jquery.dataTables.css";
import $ from 'jquery';

const Activitys = ref([]);
const newActivity = ref({
  title: "",
  description: "",
  start_date: "",
  end_date: "",
});

const fetchActivitys = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/infaq`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Activitys.value = data.data.data;

    // Initialize DataTable after fetching data
    initializeDataTable();
  } catch (error) {
    console.error("There was a problem fetching the Activitys:", error);
  }
};

const handleFileUpload = (event) => {
  newActivity.value.image = event.target.files[0];
};
const token = "4|UScdEMUD4dozKsogjlBtatrq5xBpga2yjSBL07kx7d030af8";

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

const initializeDataTable = () => {
  $(document).ready(function () {
    $('#dataTable').DataTable();
  });
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
                                <li class="breadcrumb-item active" aria-current="page">Infaq</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <div class="mb-4 card">
                            <div class="card-header">
                                <h1 class="mt-4" style="float: left;">Laporan Infaq</h1>
                                <h3 style="float: right; margin-top: 2.5rem;">Total : Rp3.000.000</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Gender</th>
                                                <th>Tanggal</th>
                                                <th>Penginput</th>
                                                <th>Pembayaran</th>
                                                <th>Jumlah</th>
                                                <th>Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(activity, index) in Activitys" :key="activity.id">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ activity.name }}</td>
                                                <td>{{ activity.gender }}</td>
                                                <td>{{ activity.date }}</td>
                                                <td>{{ activity.input_by }}</td>
                                                <td>{{ activity.payment }}</td>
                                                <td>{{ activity.amount }}</td>
                                                <td>
                                                    <button @click="deleteActivity(activity.id)">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                      <div class="d-flex justify-content-end gap-3">
                          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                            Request
                        </button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                            Print
                        </button>
                      </div>
                    </div>
                </main>
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
