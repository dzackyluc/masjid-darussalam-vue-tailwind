<script setup>

import { ref, onMounted } from "vue";
import DataTable from 'datatables.net-bs5';
import $ from 'jquery';

const token = localStorage.getItem("authToken");

const Infaq = ref([]);
const newInfaq = ref({
  title: "",
  amount: "",
  description: ""
});

const showCreateModal = ref(true);

const showModal = () => {
  
  showCreateModal.value = true;
}

const fetchInfaq = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/infaq`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Infaq.value = data.data.data;

    // Initialize DataTable after fetching data
    initializeDataTable();
  } catch (error) {
    console.error("There was a problem fetching the Infaq:", error);
  }
};

const addInfaq = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      title: newInfaq.value.title,
      description: newInfaq.value.description,
      amount: newInfaq.value.amount
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/infaq`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Infaq.value.push(data.data);
    resetForm();
    showCreateModal.value = false;
  } catch (error) {
    console.error("There was a problem adding the infaq:", error);
  }
};

const deleteInfaq = async (InfaqId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/infaq/${InfaqId}`,
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
    Infaq.value = Infaq.value.filter(
      (Infaq) => Infaq.id !== InfaqId
    );
  } catch (error) {
    console.error("There was a problem deleting the Infaq:", error);
  }
};

const initializeDataTable = () => {
  $(document).ready(function () {
    $('#dataTable').DataTable();
  });
};

const resetForm = () => {
  newInfaq.value = {
    title: "",
    amount: "",
    description: ""
  };
};

onMounted(fetchInfaq);
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
                                <button class="btn btn-primary mb-3" @click="showModal()">Tambah Infaq</button>
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Tanggal</th>
                                                <th>Penginput</th>
                                                <th>Pembayaran</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(infaq, index) in Infaq" :key="infaq.id">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ infaq.date }}</td>
                                                <td>{{ infaq.user.name }}</td>
                                                <td>{{ infaq.amount }}</td>
                                                <td>
                                                    <button @click="deleteInfaq(infaq.id)">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Create -->
                        <div v-if="showCreateModal" class="modal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Tambah Infaq</h5>
                                        <button type="button" class="close" @click="showCreateModal = false" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="title">Title</label>
                                            <input type="text" class="form-control" v-model="newInfaq.title" id="title" placeholder="Enter title">
                                        </div>
                                        <div class="form-group">
                                            <label for="amount">Amount</label>
                                            <input type="number" class="form-control" v-model="newInfaq.amount" id="amount" placeholder="Enter amount">
                                        </div>
                                        <div class="form-group">
                                            <label for="description">Description</label>
                                            <textarea class="form-control" v-model="newInfaq.description" id="description" placeholder="Enter description"></textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" @click="showCreateModal = false">Close</button>
                                        <button type="button" class="btn btn-primary" @click="addInfaq">Save changes</button>
                                    </div>
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
