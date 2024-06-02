<template>
    <div>
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
                <h1 class="text-2xl text-[#4E6F52]">Laporan Infaq</h1>
            </div>
            <div class="flex w-6/12 max-md:ml-0 max-md:w-full justify-end">  
                <button id="popupButton" class="box-border h-[33px] w-[190px] relative px-4 ml-20 mt-10 font-medium shadow-md text-center bg-[#4E6F52] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 appearance-none cursor-pointer rounded-[50px] text-[#F6EFE5] max-sm:mt-12" data-el="button-1">
                    Ikut Berinfaq
                </button>
            </div>
        </div>
        <div class="table-data grid grid-cols-1 md:grid-cols-2 gap-8 justify-center pr-40 pl-40 mt-10">
            <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-md rounded-[20px] cursor-pointer">
                <thead class="bg-[#4E6F52] rounded-[20px] text-[white]">
                    <tr>
                        <th class="w-1/12 p-2 content-center p-4 text-2xl font-medium" colspan="3">Mei 2024</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">No.</td>
                        <td class="p-2">Tanggal</td>
                        <td class="p-2">Jumlah</td>
                    </tr>
                    <tr>
                        <td class="p-2">2</td>
                        <td class="p-2">Haikal</td>
                        <td class="p-2">30-04-2024</td>
                    </tr>
                </tbody>
            </table>
            <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-md rounded-[20px] cursor-pointer">
                <thead class="bg-[#4E6F52] w-full rounded-[10px] text-[white]">
                    <tr>
                        <th class="w-1/12 p-2 content-center p-4 text-2xl font-medium" colspan="3">Mei 2024</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">No.</td>
                        <td class="p-2">Tanggal</td>
                        <td class="p-2">Jumlah</td>
                    </tr>
                    <tr>
                        <td class="p-2">2</td>
                        <td class="p-2">Haikal</td>
                        <td class="p-2">30-04-2024</td>
                    </tr>
                </tbody>
            </table>
            <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-md rounded-[20px] cursor-pointer">
                <thead class="bg-[#4E6F52] w-full rounded-[10px] text-[white]">
                    <tr>
                        <th class="w-1/12 p-2 content-center p-4 text-2xl font-medium" colspan="3">Mei 2024</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">No.</td>
                        <td class="p-2">Tanggal</td>
                        <td class="p-2">Jumlah</td>
                    </tr>
                    <tr>
                        <td class="p-2">2</td>
                        <td class="p-2">Haikal</td>
                        <td class="p-2">30-04-2024</td>
                    </tr>
                </tbody>
            </table>
            <table class="table-auto w-full text-center bg-[#F6EFE5] p-4 shadow-md rounded-[20px] cursor-pointer">
                <thead class="bg-[#4E6F52] w-full rounded-[10px] text-[white]">
                    <tr>
                        <th class="w-1/12 p-2 content-center p-4 text-2xl font-medium" colspan="3">Mei 2024</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">No.</td>
                        <td class="p-2">Tanggal</td>
                        <td class="p-2">Jumlah</td>
                    </tr>
                    <tr>
                        <td class="p-2">2</td>
                        <td class="p-2">Haikal</td>
                        <td class="p-2">30-04-2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
     <!-- Form Popup -->
    <div id="popupForm" class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center hidden">
        <div class="popup-content bg-white p-8 rounded-[15px] relative">
            <form id="infaqForm" class="form-auto w-full text-center rounded-10px">
                <div class="f-header text-3xl mb-6">
                    <h1>Ikut Berinfaq</h1>
                </div> 
                <div class="form-wrapper space-y-6">
                    <div>
                        <div class="flex justify-start font-semibold text-[#4E6F52]">Nama</div>
                        <input
                            type="text"
                            placeholder=""
                            name="nama"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        />
                    </div>
                    <div>
                        <div class="flex justify-start font-semibold text-[#4E6F52]">Jenis Kelamin</div>
                        <select
                            name="JenisKelamin"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        >
                            <option value="" disabled selected></option>
                            <option value="lakilaki">Laki Laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div>
                        <div class="flex justify-start font-semibold text-[#4E6F52]">Pembayaran</div>
                        <select
                            name="payment"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        >
                            <option value="" disabled selected></option>
                            <option value="cash">Tunai</option>
                            <option value="transfer">Transfer</option>
                        </select>
                    </div>
                    <div>
                        <div class="flex justify-start font-semibold text-[#4E6F52]">Sebesar</div>
                        <input
                            type="number"
                            placeholder="Rp. "
                            name="sebesar"
                            id="inputSebesar"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        />
                    </div>
                </div>
                <div class="flex justify-end pt-8">
                    <button type="button" id="closeButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Batal
                    </button>
                    <button type="button" id="nextButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Lanjut
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Payment Popup -->
    <div id="paymentTunai" class="flex flex-col fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center hidden">
        <div class="tunai-popup popup-content bg-white p-8 rounded-[20px] w-[690px] relative">
            <div class="t-header text-3xl mb-6">
                <h1 class="text-center">Jazakallah khairan katsiran</h1>
            </div>
            <div class="total-p-grup flex flex-col justify-start mb-4">
                <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
                <div id="totalAmount" class="text-3xl text-left">Rp.</div>
            </div>
            <div class="img-content text-center content-center">
                <div class="max-md mt-10">
                    <img src="../assets/niat zakat.svg" alt="niat" class="mx-auto">
                </div>
                <div class="mt-4">
                    <p class="text-center">
                        Nawaitu an ukhrija zakatal mali’an nafsi fardan lillahi ta’ala
                    </p>
                </div>
                <div class="pt-4">
                    <p class="text-center">
                        "Saya berniat mengeluarkan zakat harta dari diri sendiri karena Allah Taala.”
                    </p>
                </div>
                <div class="flex justify-end pt-8">
                    <button id="backButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Kembali
                    </button>
                    <button id="sentButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
$(document).ready(function() {
    $('#popupButton').on('click', function() {
        $('#popupForm').removeClass('hidden');
        setTimeout(function() {
            $('#popupForm').addClass('popup-show').removeClass('popup-hide');
        }, 10);
    });

    $('#closeButton').on('click', function() {
        $('#popupForm').removeClass('popup-show').addClass('popup-hide');
        setTimeout(function() {
            $('#popupForm').addClass('hidden');
        }, 300);
    });

    // Fungsi untuk memeriksa validasi field input
    function validateForm() {
        let isValid = true;
        $('input, select').each(function() {
            if ($(this).val() === '' || $(this).val() === null) {
                isValid = false;
                $(this).addClass('border-red-500');
            } else {
                $(this).removeClass('border-red-500'); 
            }
        });
        return isValid;
    }

    // Tangani peristiwa saat tombol "Lanjut" ditekan
    $('#nextButton').on('click', function(event) {
        event.preventDefault();

        if (validateForm()) {
            if ($('select[name="payment"]').val() === 'cash') {
                $('#paymentTunai').removeClass('hidden');
                $('#popupForm').addClass('hidden');
            } else {
                alert('Form berhasil disubmit!');
                $('#popupForm').removeClass('popup-show').addClass('popup-hide');
                setTimeout(function() {
                    $('#popupForm').addClass('hidden');
                }, 300); 
            }
        } else {
            alert('Harap isi semua formulir.');
        }
    });

    // Tangani peristiwa saat tombol "Kembali" atau "Kirim" ditekan
    $('#backButton, #sentButton').on('click', function() {
        $('#paymentTunai').removeClass('popup-show').addClass('popup-hide');
        setTimeout(function() {
            $('#paymentTunai').addClass('hidden');
        }, 300);
    });
    document.getElementById('nextButton').addEventListener('click', function() {
        var inputSebesar = document.getElementById('inputSebesar').value;
        if (inputSebesar === '') {
            alert('Silakan masukkan jumlah.');
            return;
        }
        document.getElementById('totalAmount').textContent = 'Rp. ' + inputSebesar;
        document.getElementById('popupForm').classList.add('hidden');
        document.getElementById('paymentTunai').classList.remove('hidden');
    });

    document.getElementById('backButton').addEventListener('click', function() {
        document.getElementById('paymentTunai').classList.add('hidden');
        document.getElementById('popupForm').classList.remove('hidden');
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        document.getElementById('popupForm').classList.add('hidden');
    });
});
</script>