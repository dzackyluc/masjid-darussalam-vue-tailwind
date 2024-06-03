<template>
  <div>
    <AppBar />
    <div class="content-wrapper p-4">
      <div class="header-content flex flex-col items-center">
        <div class="image-header max-md mt-10">
          <img src="../assets/bismillah.svg" alt="bismillah" />
        </div>
        <div class="header pt-10">
          <h1 class="font-bold text-2xl">
            “Dengan menyebut nama ALLAH Yang Maha Pengasih lagi Maha Penyayang”
          </h1>
        </div>
        <div class="definition-zakat pt-10 pr-40 pl-40 font-medium">
          <p class="text-center text-xl font-medium">
            Zakat merupakan sebuah praktek peribadatan yang mana setiap orang Islam diwajibkan untuk membayarkan 2,5% harta yang dimilikinya kepada yang membutuhkan. 
            Seperti yang tertear dalam surah Al-Anbiya ayat 173:
          </p>
        </div>
        <br>
        <br>
        <div class="image-anbiya max-md mt-10">
          <img src="../assets/al-anbiya-173.svg" alt="Al Anbiya 173" />
        </div>
        <div class="definition-zakat pt-10 pr-40 pl-40 font-medium">
          <p class="text-center text-xl font-weight-medium">
            “Dan Kami menjadikan mereka itu sebagai pemimpin-pemimpin yang memberi petunjuk dengan perintah Kami dan Kami 
            wahyukan kepada mereka agar berbuat kebaikan, melaksanakan salat dan menunaikan zakat, dan hanya kepada Kami mereka menyembah.”          </p>
        </div>
      </div>
      <div
        class="zakat-header flex justify-center items-center pr-40 pl-40 mt-10"
      >
        <!-- <div class="header-laporan font-semibold">
          <h1 class="text-2xl text-[#4E6F52]">Laporan Zakat</h1>
        </div> -->
        <div class="flex w-6/12 max-md:ml-0 max-md:w-full justify-center items-center mt-10">
          <button
            @click="showPopup"
            class="flex items-center justify-center h-[80px] w-[360px] font-medium shadow-md text-3xl bg-[#4E6F52] transition transform hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer rounded-[15px] text-[#F6EFE5] max-sm:mt-12"
            data-el="button-1"
          >
            Ikutan Berzakat yuk !
          </button>
        </div>
      </div>
      <div class="table-data flex justify-center pr-40 pl-40 mt-10">
        <!-- <div class="table-data flex justify-center pr-40 pl-40 mt-10">
          <table
            class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-lg rounded-[10px] cursor-pointer"
          >
            <thead>
              <tr>
                <th class="w-1/12 p-2">No.</th>
                <th class="w-2/12 p-2">Muzakki</th>
                <th class="w-2/12 p-2">Tanggal</th>
                <th class="w-2/12 p-2">Amil</th>
                <th class="w-2/12 p-2">Mustahiq</th>
                <th class="w-1/12 p-2">Jenis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">2</td>
                <td class="p-2">Haikal</td>
                <td class="p-2">30-04-2024</td>
                <td class="p-2">Malik</td>
                <td class="p-2">Cici</td>
                <td class="p-2">Fitrah</td>
              </tr>
            </tbody>
          </table>
        </div> -->
        <div
          v-if="isPopupVisible"
          class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
        >
          <div class="popup-content bg-white p-8 rounded-[15px] relative">
            <form
              @submit.prevent="handleNext"
              class="form-auto w-full text-center rounded-[10px]"
            >
              <div class="f-header text-3xl mb-6">
                <h1>Ikut Berzakat</h1>
              </div>
              <div class="form-wrapper space-y-6">
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Jenis Zakat
                  </div>
                  <select
                    v-model="form.jenisZakat"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  >
                    <option value="" disabled selected></option>
                    <option value="penghasilan">Zakat Penghasilan</option>
                    <option value="maal">Zakat Mal</option>
                  </select>
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Nama
                  </div>
                  <input
                    type="text"
                    v-model="form.nama"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  />
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Email
                  </div>
                  <input
                    type="email"
                    v-model="form.email"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  />
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    No Telepon
                  </div>
                  <input
                    type="text"
                    v-model="form.phone"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  />
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Jenis Kelamin
                  </div>
                  <select
                    v-model="form.jenisKelamin"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  >
                    <option value="" disabled selected></option>
                    <option value="laki-laki">Laki Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Pembayaran
                  </div>
                  <select
                    v-model="form.payment"
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  >
                    <option value="" disabled selected></option>
                    <option value="cash">Tunai</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
                <div>
                  <div class="flex justify-start font-semibold text-[#4E6F52]">
                    Sebesar
                  </div>
                  <input
                    type="number"
                    v-model="form.sebesar"
                    placeholder="Rp. "
                    class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[5px] shadow-md"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end pt-8">
                <button
                  type="button"
                  @click="closePopup"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  @click="handleNext"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Lanjut
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Payment Tunai -->
        <div
          v-if="isPaymentTunaiVisible"
          class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
        >
          <div
            class="tunai-popup popup-content bg-white p-8 rounded-[20px] w-[690px] relative"
          >
            <div class="t-header text-3xl mb-6">
              <h1 class="text-center">Ikut Berzakat</h1>
            </div>
            <div class="total-p-grup flex flex-col justify-start mb-4">
              <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
              <div class="text-3xl text-left">
                {{ formatCurrency(form.sebesar) }}
              </div>
            </div>
            <div class="img-content text-center content-center">
              <div class="max-md mt-10">
                <img
                  style="width: 500px"
                  src="../assets/niatzakat.svg"
                  alt="niat"
                  class="mx-auto"
                />
              </div>
              <br />
              <div class="mt-4">
                <p class="text-center">
                  Nawaitu an ukhrija zakatal mali’an nafsi fardan lillahi ta’ala
                </p>
              </div>
              <div class="pt-4">
                <p class="text-center">
                  "Saya berniat mengeluarkan zakat harta dari diri sendiri
                  karena Allah Taala.”
                </p>
              </div>
              <div class="flex justify-end pt-8">
                <button
                  @click="backToForm"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Kembali
                </button>
                <button
                  @click="submitForm"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Transfer -->
        <div
          v-if="isPaymentTransferVisible"
          class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
        >
          <div
            class="tunai-popup popup-content bg-white p-8 rounded-[20px] w-[690px] relative"
          >
            <div class="t-header text-3xl mb-6">
              <h1 class="text-center">Ikut Berzakat</h1>
            </div>
            <div
              class="total-p-grup inline-grid grid-cols-2 gap-10 justify-start mb-4"
            >
              <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
              <div class="text-right">{{ formatCurrency(form.sebesar) }}</div>
            </div>
            <div class="img-content text-center content-center">
              <div class="max-md mt-10">
                <img src="../assets/niatzakat.svg" alt="niat" class="mx-auto" />
              </div>
              <div class="mt-4">
                <p class="text-center">
                  Nawaitu an ukhrija zakatal mali’an nafsi fardan lillahi ta’ala
                </p>
              </div>
              <div class="pt-4">
                <p class="text-center">
                  "Saya berniat mengeluarkan zakat harta dari diri sendiri
                  karena Allah Taala.”
                </p>
              </div>
              <div class="flex justify-end pt-8">
                <button
                  @click="backToForm"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Kembali
                </button>
                <button
                  @click="submitForm"
                  class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style src=".../assets/zakatreport.css"></style> -->
<style>
.hidden {
  display: none;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-show {
  opacity: 1;
  transform: translateY(0);
}
.popup-hide {
  opacity: 0;
  transform: translateY(-20px);
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 15px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.payment-popup {
  background: white;
  padding: 20px;
  border-radius: 20px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.border-red-500 {
  border-color: red;
}
</style>

<script setup>
import AppBar from "../components/AppBar.vue";
import "../assets/zakatreport.css";
</script>
<!-- <link rel="https://cdn.tailwindcss.com" rel="stylesheet"> -->
<script>
const token = localStorage.getItem("authToken");

export default {
  data() {
    return {
      isPopupVisible: false,
      isPaymentTunaiVisible: false,
      isPaymentTransferVisible: false,
      form: {
        jenisZakat: "",
        nama: "",
        jenisKelamin: "",
        payment: "",
        sebesar: "",
      },
    };
  },
  methods: {
    showAlert() {
      this.$swal.close();
    },

    showPopup() {
      this.isPopupVisible = true;
      setTimeout(() => {
        this.isPopupVisible = true;
      }, 10);
    },
    closePopup() {
      this.isPopupVisible = false;
      setTimeout(() => {
        this.isPopupVisible = false;
      }, 300);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(value);
    },
    validateForm() {
      return (
        this.form.jenisZakat &&
        this.form.nama &&
        this.form.jenisKelamin &&
        this.form.payment &&
        this.form.sebesar
      );
    },
    handleNext() {
      if (this.validateForm()) {
        if (this.form.payment === "cash") {
          this.isPaymentTunaiVisible = true;
          this.isPopupVisible = false;
        } else if (this.form.payment === "transfer") {
          this.isPaymentTransferVisible = true;
          this.isPopupVisible = false;
        } else {
          alert("Form berhasil disubmit!");
          this.closePopup();
        }
      } else {
        alert("Harap isi semua formulir.");
      }
    },
    backToForm() {
      this.isPaymentTunaiVisible = false;
      this.isPaymentTransferVisible = false;
      this.isPopupVisible = true;
    },
    submitForm() {
      if (this.form.payment === "cash") {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("type", this.form.jenisZakat);
        formdata.append("amount", this.form.sebesar);
        formdata.append("name", this.form.nama);
        formdata.append("gender", this.form.jenisKelamin);
        formdata.append("phone", this.form.phone);
        formdata.append("email", this.form.email);
        formdata.append("midtrans_token", "-");

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        fetch(`${import.meta.env.VITE_BASE_URL}/api/zakat`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            this.$swal({
              title: "Berhasil!",
              text: "Anda telah berhasil membayar zakat secara tunai",
              icon: "success",
            });
          })
          .catch((error) => {
            this.$swal({
              title: "Gagal!",
              text: "Anda gagal membayar zakat secara tunai",
              icon: "error",
            });
          });
      } else if (this.form.payment === "transfer") {
        this.isPaymentTransferVisible = true;
        this.isPopupVisible = false;

        this.$swal.showLoading();

        this.showSnap();
      } else {
        alert("Form berhasil disubmit!");
        this.closePopup();
      }

      this.isPaymentTunaiVisible = false;
      this.isPaymentTransferVisible = false;
    },
    async showSnap() {
      this.closePopup();
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      const formdata = new FormData();
      formdata.append("type", this.form.jenisZakat);
      formdata.append("amount", this.form.sebesar);
      formdata.append("name", this.form.nama);
      formdata.append("gender", this.form.jenisKelamin);
      formdata.append("phone", this.form.phone);
      formdata.append("email", this.form.email);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/zakat/bayar`,
          requestOptions
        );
        const result = await response.json();

        this.$swal.close();
        snap.pay(result.data, {
          onSuccess: (result) => {

            console.log(result);

            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            const formdata = new FormData();
            formdata.append("type", this.form.jenisZakat);
            formdata.append("amount", this.form.sebesar);
            formdata.append("name", this.form.nama);
            formdata.append("gender", this.form.jenisKelamin);
            formdata.append("phone", this.form.phone);
            formdata.append("email", this.form.email);
            formdata.append("midtrans_token", result.data);

            formdata.append("transaction_id", result.transaction_id);
            formdata.append("order_id", result.order_id);
            formdata.append("payment_type", result.payment_type);


            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: formdata,
              redirect: "follow",
            };

            fetch(`${import.meta.env.VITE_BASE_URL}/api/zakat`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                this.$swal({
                  title: "Berhasil!",
                  text: "Anda telah berhasil membayar zakat secara transfer",
                  icon: "success",
                });
              })
              .catch((error) => {
                this.$swal({
                  title: "Gagal!",
                  text: "Anda gagal membayar zakat secara transfer",
                  icon: "error",
                });
              });
          },
          onPending: (result) => {
            // Add logic as needed
          },
          onError: (result) => {
            console.error(result);
            // Add logic as needed
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

