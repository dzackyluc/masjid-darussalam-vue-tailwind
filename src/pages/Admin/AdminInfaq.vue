
<script setup>
import { ref, onMounted } from "vue";
import DataTablesCore from "datatables.net-bs5";
import $ from "jquery";
import DataTable from "datatables.net-vue3";
import Modal from "../../components/Modal.vue";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

DataTable.use(DataTablesCore);

const token = localStorage.getItem("authToken");

const Infaq = ref([]);
const totalInfaq = ref(0);
const newInfaq = ref({
  title: "",
  amount: "",
});

const isModalVisible = ref(false);

const fetchInfaq = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/infaq`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    Infaq.value = data.data.data;
    totalInfaq.value = data.totalInfaq;
  } catch (error) {
    console.error("There was a problem fetching the Infaq:", error);
  }
};

const addInfaq = async () => {
  Swal.showLoading();

  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    const raw = JSON.stringify({
      title: newInfaq.value.title,
      amount: newInfaq.value.amount,
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
    fetchInfaq();
    Swal.close();
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Data Infaq berhasil ditambahkan",
    });
    resetForm();
    isModalVisible.value = false;
  } catch (error) {
    console.error("There was a problem adding the infaq:", error);
  }
};

const deleteInfaq = async (InfaqId) => {
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
          `${import.meta.env.VITE_BASE_URL}/api/infaq/${InfaqId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Ada field yang belum diisi",
            text: "Data Zakat gagal ditambahkan",
          });
          throw new Error("Network response was not ok");
        }
        fetchInfaq();
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data Infaq berhasil dihapus",
        });
      } catch (error) {
        console.error("There was a problem deleting the infaq:", error);
      }
    }
  });
};

const initializeDataTable = () => {
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });
};

const resetForm = () => {
  newInfaq.value = {
    title: "",
    amount: "",
  };
};

const formatCurrency = (value) => {
   return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
};

const cc = [
  {
    data: "id",
    render: (data, type, row, meta) => {
      return meta.row + 1;
    },
  },
  {
    data: "title",
    render: (data) => {
      return data;
    },
  },
  {
    data: "created_at",
    render: (data) => {
      return new Date(data).toLocaleDateString();
    },
  },
  {
    data: "name",
    render: (data) => {
      return data;
    },
  },
  {
    data: "amount",
    render: (data) => {
      return `${formatCurrency(data)}`;
    },
  },
  {
    data: "id",
    render: (data) => {
      return `
        <button class="btn btn-danger delete" data-id="${data}">Delete</button>
      `;
    },
  },
];

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(Infaq.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Infaq");
  XLSX.writeFile(workbook, "Infaq.xlsx");
};

onMounted(() => {
  fetchInfaq();
  $("#dataTable").on("click", ".delete", function () {
    const InfaqId = $(this).data("id");
    deleteInfaq(InfaqId);
  });
  initializeDataTable();
});

const showModal = () => {
  isModalVisible.value = true;
};
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
            <h1 class="mt-4" style="float: left">Laporan Infaq</h1>
            <h3 style="float: right; margin-top: 2.5rem">
              Total : {{totalInfaq}}
            </h3>
          </div>
          <div class="card-body">
            <button class="btn btn-primary mb-3" @click="showModal">
              Tambah Infaq
            </button>
            <div class="table-responsive">
              <DataTable
                id="dataTable"
                :data="Infaq"
                :columns="cc"
                class="display table table-bordered"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Penginput</th>
                    <th>Pembayaran</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </DataTable>
            </div>
          </div>
        </div>

        <Modal
          title="Buat Data Infaq"
          :isVisible="isModalVisible"
          @update:isVisible="isModalVisible = $event"
        >
          <form @submit.prevent="addInfaq">
            <div class="mb-3">
              <label for="title" style="color: #4e6f52" class="form-label"
                >Judul</label
              >
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="newInfaq.title"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="title" style="color: #4e6f52" class="form-label"
                >Jumlah</label
              >
              <input
                v-model="newInfaq.amount"
                type="number"
                class="form-control"
                id="amount"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </Modal>

        <!-- Modal Create -->

        <div class="d-flex justify-content-end gap-3">
          
          <button
            type="button"
            class="btn btn-primary"
         @click="exportToExcel"
          >
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










