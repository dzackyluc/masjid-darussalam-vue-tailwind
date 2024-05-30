<template>
    <div>
        <AppBar/>
        <div class="content-wrapper p-4">
            <div class="header-content flex flex-col items-center">
                <div class="image-header max-md mt-10">
                    <img src="../assets/bismillah.svg" alt="bismillah">
                </div>
                <div class="header pt-10">
                    <h1 class="font-bold">“Dengan menyebut nama ALLAH Yang Maha Pengasih lagi Maha Penyayang”</h1>
                </div>
                <div class="definition-zakat pt-10 pr-40 pl-40">
                    <p class="text-justify font-medium">Pengertian zakat fitrah sama ayatnya Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div class="zakat-header flex justify-between items-center pr-40 pl-40 mt-10">
                <div class="header-laporan font-semibold">
                    <h1 class="text-2xl text-[#4E6F52]">Laporan Zakat</h1>
                </div>
                <div class="flex w-6/12 max-md:ml-0 max-md:w-full justify-end">  
                    <button @click="showPopup" class="box-border h-[33px] w-[190px] relative px-4 ml-20 mt-10 font-medium shadow-md text-center bg-[#4E6F52] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 appearance-none cursor-pointer rounded-[50px] text-[#F6EFE5] max-sm:mt-12" data-el="button-1">
                        Ikut Berzakat
                    </button>
                </div>
            </div>
            <div class="table-data flex justify-center pr-40 pl-40 mt-10">
                <div class="table-data flex justify-center pr-40 pl-40 mt-10">
                    <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-lg rounded-[10px] cursor-pointer">
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
                </div>
            <div v-if="isPopupVisible" class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                <div class="popup-content bg-white p-8 rounded-[15px] relative">
                    <form @submit.prevent="handleNext" class="form-auto w-full text-center rounded-[10px]">
                        <div class="f-header text-3xl mb-6">
                            <h1>Ikut Berzakat</h1>
                        </div>
                        <div class="form-wrapper space-y-6">
                                <div>
                                    <div class="flex justify-start font-semibold text-[#4E6F52]">Jenis Zakat</div>
                                    <select v-model="form.jenisZakat" class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md" required>
                                        <option value="" disabled selected></option>
                                        <option value="zakat1">Zakat Penghasilan</option>
                                        <option value="zakat2">Zakat Mal</option>
                                    </select>
                                    </div>
                                    <div>
                                        <div class="flex justify-start font-semibold text-[#4E6F52]">Nama</div>
                                        <input type="text" v-model="form.nama" class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md" required />
                                    </div>
                                    <div>
                                        <div class="flex justify-start font-semibold text-[#4E6F52]">Jenis Kelamin</div>
                                        <select v-model="form.jenisKelamin" class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md" required>
                                            <option value="" disabled selected></option>
                                            <option value="lakilaki">Laki Laki</option>
                                            <option value="perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                    <div>
                                    <div class="flex justify-start font-semibold text-[#4E6F52]">Pembayaran</div>
                                    <select v-model="form.payment" class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md" required>
                                        <option value="" disabled selected></option>
                                        <option value="cash">Tunai</option>
                                        <option value="transfer">Transfer</option>
                                    </select>
                                    </div>
                                    <div>
                                        <div class="flex justify-start font-semibold text-[#4E6F52]">Sebesar</div>
                                        <input type="number" v-model="form.sebesar" placeholder="Rp. " class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md" required />
                                    </div>
                        </div>
                        <div class="flex justify-end pt-8">
                                <button type="button" @click="closePopup" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Batal</button>
                                <button type="submit"  @click="showSnap" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Lanjut</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Payment Tunai -->
            <div v-if="isPaymentTunaiVisible" class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                <div class="tunai-popup popup-content bg-white p-8 rounded-[20px] w-[690px] relative">
                    <div class="t-header text-3xl mb-6">
                        <h1 class="text-center">Ikut Berzakat</h1>
                    </div>
                    <div class="total-p-grup flex flex-col justify-start mb-4">
                        <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
                        <div class="text-3xl text-left">Rp. {{ form.sebesar }}</div>
                    </div>
                    <div class="img-content text-center content-center">
                        <div class="max-md mt-10">
                            <img src=".../assets/niat zakat.svg" alt="niat" class="mx-auto">
                        </div>
                    <div class="mt-4">
                        <p class="text-center">Nawaitu an ukhrija zakatal mali’an nafsi fardan lillahi ta’ala</p>
                    </div>
                    <div class="pt-4">
                        <p class="text-center">"Saya berniat mengeluarkan zakat harta dari diri sendiri karena Allah Taala.”</p>
                    </div>
                    <div class="flex justify-end pt-8">
                        <button @click="backToForm" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Kembali</button>
                        <button @click="submitForm" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Kirim</button>
                    </div>
                </div>
            </div>
            </div>

            <!-- Payment Transfer -->
            <div v-if="isPaymentTransferVisible" class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                <div class="tunai-popup popup-content bg-white p-8 rounded-[20px] w-[690px] relative">
                    <div class="t-header text-3xl mb-6">
                        <h1 class="text-center">Ikut Berzakat</h1>
                    </div>
                    <div class="total-p-grup inline-grid grid-cols-2 gap-10 justify-start mb-4">
                        <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
                        <div class="text-right">Pilih dalam 15:00</div>
                    </div>
                    <div class="img-content text-center content-center">
                        <div class="max-md mt-10">
                            <img src=".../assets/niat zakat.svg" alt="niat" class="mx-auto">
                        </div>
                        <div class="mt-4">
                            <p class="text-center">Nawaitu an ukhrija zakatal mali’an nafsi fardan lillahi ta’ala</p>
                        </div>
                        <div class="pt-4">
                            <p class="text-center">"Saya berniat mengeluarkan zakat harta dari diri sendiri karena Allah Taala.”</p>
                        </div>
                        <div class="flex justify-end pt-8">
                            <button @click="backToForm" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Kembali</button>
                            <button @click="submitForm" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">Kirim</button>
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
    import AppBar from '../components/AppBar.vue'
    import '../assets/zakatreport.css' 

</script>
<!-- <link rel="https://cdn.tailwindcss.com" rel="stylesheet"> -->
<script>
export default {
  data() {
    return {
      isPopupVisible: false,
      isPaymentTunaiVisible: false,
      isPaymentTransferVisible: false,
      form: {
        jenisZakat: '',
        nama: '',
        jenisKelamin: '',
        payment: '',
        sebesar: ''
      }
    };
  },
  methods: {
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
    validateForm() {
      return this.form.jenisZakat && this.form.nama && this.form.jenisKelamin && this.form.payment && this.form.sebesar;
    },
    handleNext() {
      if (this.validateForm()) {
        if (this.form.payment === 'cash') {
          this.isPaymentTunaiVisible = true;
          this.isPopupVisible = false;
        } else if (this.form.payment === 'transfer') {
          this.isPaymentTransferVisible = true;
          this.isPopupVisible = false;
        } else {
          alert('Form berhasil disubmit!');
          this.closePopup();
        }
      } else {
        alert('Harap isi semua formulir.');
      }
    },
    backToForm() {
      this.isPaymentTunaiVisible = false;
      this.isPaymentTransferVisible = false;
      this.isPopupVisible = true;
    },
    submitForm() {
      alert('Form berhasil dikirim!');
      this.isPaymentTunaiVisible = false;
      this.isPaymentTransferVisible = false;
    },
    async showSnap() {

        this.closePopup()
        const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 4|UScdEMUD4dozKsogjlBtatrq5xBpga2yjSBL07kx7d030af8");

const formdata = new FormData();
formdata.append("type", "maal");
formdata.append("amount", "20000");
formdata.append("name", "Reksa Prayoga Syahputra");
formdata.append("gender", "laki-laki");
formdata.append("phone", "0895331493506");
formdata.append("email", "reksa.prayoga1012@gmail.com");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("http://34.34.221.131/api/zakat/bayar", requestOptions)
  .then((response) => response.json())
  .then((result) => {
// Memanggil fungsi snap.pay() dengan snap token yang diterima dari backend
snap.pay(result.data, {
        // Optional: Menambahkan callback untuk menangani kesuksesan pembayaran
        onSuccess: function(result) {
          console.log(result);
          // Tambahkan logika sesuai kebutuhan
        },
        // Optional: Menambahkan callback untuk menangani pembayaran yang tertunda
        onPending: function(result) {
          console.log( result);
          // Tambahkan logika sesuai kebutuhan
        },
        // Optional: Menambahkan callback untuk menangani kesalahan pembayaran
        onError: function(result) {
          console.error( result);
          // Tambahkan logika sesuai kebutuhan
        }
      });

  })
  .catch((error) => console.error(error));



      
    }
  }
};
</script>

