<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import DataTablesCore from "datatables.net-bs5";
import $ from "jquery";
import DataTable from "datatables.net-vue3";
import * as XLSX from "xlsx";

DataTable.use(DataTablesCore);

const token = localStorage.getItem("authToken");

const Zakat = ref([]);
const newZakat = ref({
  title: "",
  description: "",
  start_date: "",
  end_date: "",
});

const filterAmmount = ref({
  amount_max: 0,
  amount_min: 0,
});

const totalZakat = ref(0);

const fetchZakat = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/zakat`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    Zakat.value = data.data.data;
    totalZakat.value = data.total;

    // Initialize DataTable after fetching data
    initializeDataTable();
  } catch (error) {
    console.error("There was a problem fetching the Zakat:", error);
  }
};

const cc = [
  {
    data: "id",
    render: (data, type, row, meta) => {
      return meta.row + 1;
    },
  },
  {
    data: "name",
    render: (data) => {
      return data;
    },
  },
  {
    data: "gender",
    render: (data) => {
      return data;
    },
  },
  {
    data: "date",
    render: (data) => {
      return data;
    },
  },
  {
    data: "amil",
    render: (data) => {
      return data;
    },
  },
  {
    data: "penerima",
    render: (data) => {
      return data;
    },
  },
  {
    data: "payment.payment_type",
    render: (data) => {
      return data;
    },
  },
  {
    data: "amount",
    render: (data) => {
      return data;
    },
  },
  {
    data: "status",
    render: (data, type, row) => {
      const pendingSelected = data === "pending" ? "selected" : "";
      const diterimaSelected = data === "diterima" ? "selected" : "";
      const disalurkanSelected = data === "disalurkan" ? "selected" : "";

      return `
        <select class="form-select status-change" data-id="${row.id}">
          <option value="pending" ${pendingSelected}>Pending</option>
          <option value="diterima" ${diterimaSelected}>Diterima</option>
          <option value="disalurkan" ${disalurkanSelected}>Disalurkan</option>
        </select>
      `;
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

const initializeDataTable = () => {
  $(document).ready(function () {
    $("#dataTable").DataTable();
  });
};

const deleteZakat = async (id) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/zakat/${id}`,
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
        fetchZakat();
      } catch (error) {
        console.error("There was a problem deleting the Zakat:", error);
      }
    }
  });
};
const ChangeStatus = async (id, event) => {
  const newStatus = event.target.value;

  if (newStatus == "disalurkan") {
    Swal.fire({
      title: "Masukkan Penerima Zakat",
      input: "text",
      inputPlaceholder: "Reksa Dana, Yayasan, dll",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const recipient = result.value;
        const bd = JSON.stringify({
          status: newStatus,
          penerima: recipient,
        });
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/zakat/change-status/${id}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              body: bd,
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          fetchZakat();
        } catch (error) {
          console.error("There was a problem changing the status:", error);
        }
      }
    });
  } else {
    const bd = JSON.stringify({
      status: newStatus,
    });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/zakat/change-status/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: bd,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchZakat();
    } catch (error) {
      console.error("There was a problem changing the status:", error);
    }
  }
};

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(Zakat.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Zakat");
  XLSX.writeFile(workbook, "zakat.xlsx");
};

const filterZakat = async (event) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/zakat?amount_min=${
        filterAmmount.value.amount_min
      }&amount_max=${filterAmmount.value.amount_max}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    Zakat.value = data.data.data;
    totalZakat.value = data.total;
} catch (error) {
    console.error("There was a problem fetching the Zakat:", error);
  }
};

onMounted(fetchZakat);


onMounted(() => {
  fetchZakat();
  $("#dataTable").on("click", ".delete", function () {
    const id = $(this).data("id");
    deleteZakat(id);
  });
   $("#dataTable").on("change", ".status-change", function (event) {
    const id = $(this).data("id");
    ChangeStatus(id, event);
  });

});


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
            <li class="breadcrumb-item active" aria-current="page">zakat</li>
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
            <h1 class="mt-4" style="float: left">Laporan zakat</h1>
            <h3 style="float: right; margin-top: 2.5rem">
              Total : Rp. {{ totalZakat }}
            </h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="filterZakat">
              <div class="d-flex gap-2">
                <input
                  style="width: 300px"
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Jumlah minimal"
                  v-model="filterAmmount.amount_min"
                  aria-describedby="emailHelp"
                />

                <input
                  style="width: 300px"
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Jumlah maksimal"
                  v-model="filterAmmount.amount_max"
                  aria-describedby="emailHelp"
                />

                <button class="btn btn-primary" type="submit">Filter</button>
              </div>
            </form>

            <div class="table-responsive">
              <DataTable
                id="dataTable"
                :data="Zakat"
                :columns="cc"
                class="display table table-bordered"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Muzakki</th>
                    <th>Gender</th>
                    <th>Tanggal</th>
                    <th>Amil</th>
                    <th>Penerima</th>
                    <th width="10%">Jenis</th>
                    <th>Pembayaran</th>
                    <th width="10%">Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </DataTable>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end gap-3">
          <button type="button" class="btn btn-primary" @click="exportToExcel">
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
