<template>
    <div class="navbar-wrapper">
        <div class="navbar-container flex justify-end items-center h-20" id="navbarContainer">
            <div class="navbar-menu font-medium w-full flex justify-end items-center gap-4 pr-10 pb-4 pt-5 shadow-md mb-4" id="navbarMenu">
                <div><a href="/" class="px-4 py-2">Home</a></div>
                <div><a href="/" class="px-4 py-2">Profil</a></div>
                <div><a href="/" class="px-4 py-2">Galeri</a></div>
                <div class="flex items-center">
                    <a href="/" class="px-4 py-2">Layanan</a>
                </div>
            </div>
        </div>
    </div>
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
                <button id="popupButton" class="box-border h-[33px] w-[190px] relative px-4 ml-20 mt-10 font-medium shadow-md text-center bg-[#4E6F52] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 appearance-none cursor-pointer rounded-[50px] text-[#F6EFE5] max-sm:mt-12" data-el="button-1">
                    Ikut Berzakat
                </button>
            </div>
        </div>
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
                        <td class="p-2">1</td>
                        <td class="p-2">Haikal</td>
                        <td class="p-2">30-04-2024</td>
                        <td class="p-2">Malik</td>
                        <td class="p-2">Cici</td>
                        <td class="p-2">Fitrah</td>
                    </tr>
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
    </div>
    
    <!-- Popup Form -->
    <div id="popupForm" class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center hidden">
        <div class="popup-content bg-[white] p-8 rounded-[15px] relative">
            <form class="form-auto w-full text-center rounded-[10px]">
                <div class="f-header text-3xl mb-6">
                    <h1>Ikut Berzakat</h1>
                </div> 
                <div class="form-wrapper space-y-6">
                    <div>
                        <div class="flex justify-start font-semibold text-[#4E6F52]">Jenis Zakat</div>
                        <select
                            name="Layanan"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        >
                            <option value="" disabled selected></option>
                            <option value="zakat1">Zakat Penghasilan</option>
                            <option value="zakat2">Zakat Mal</option>
                        </select>
                    </div>
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
                            type="text"
                            placeholder="Rp. "
                            name="sebesar"
                            class="box-border bg-[#F6EFE5] w-full mt-2 p-2 rounded-[25px] shadow-md"
                            required
                        />
                    </div>
                </div>
                <div class="flex justify-end pt-8">
                    <button id="closeButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Batal
                    </button>
                    <button id="nextButton" class="box-border h-[33px] px-6 py-1 mx-2 bg-[#4E6F52] text-[#F6EFE5] font-medium shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[50px]">
                        Lanjut
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div id="paymentTunai" class="flex flex-col fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center hidden">
        <div class="tunai-popup popup-content bg-[white] p-8 rounded-[20px] w-[690px] relative">
            <div class="t-header text-3xl mb-6">
                <h1 class="text-center">Ikut Berzakat</h1>
            </div>
            <div class="total-p-grup flex flex-col justify-start mb-4">
                <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
                <div class="text-3xl text-left">Rp. 10.000</div>
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
    <div id="paymentTransfer" class="flex flex-col fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center hidden">
        <div class="tunai-popup popup-content bg-[white] p-8 rounded-[20px] w-[690px] relative">
            <div class="t-header text-3xl mb-6">
                <h1 class="text-center">Ikut Berzakat</h1>
            </div>
            <div class="total-p-grup inline-grid grid-cols-2 gap-10 justify-start mb-4">
                <div class="mr-4 text-[#4E6F52] text-left mb-2">Total</div>
                <div class="text-right">Pilih dalam 15:00</div>
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
    <footer class="footer text-white mt-auto">
        <div class="navbar-container flex justify-end h-full" id="navbarContainer">
            <div class="navbar-menu font-semibold bg-[#4E6F52] w-full h-20 flex gap-4" id="navbarMenu">
                <!-- <div><a href="/">Home</a></div>
                <div><a href="/">Profil</a></div>
                <div><a href="/">Galeri</a></div>
                <div class="text-decoration-underline flex content-center">
                    <a href="/">Layanan</a>
                </div> -->
            </div>
        </div>
    </footer>
    
</template>

<script>
    const popupButton = document.getElementById('popupButton');
    const popupForm = document.getElementById('popupForm');
    const closeButton = document.getElementById('closeButton');
    const nextButton = document.getElementById('nextButton');
    const paymentTunai = document.getElementById('paymentTunai');
    const paymentTransfer = document.getElementById('paymentTransfer');
    const backButton = document.getElementById('backButton');
    const sentButton = document.getElementById('sentButton');

    popupButton.addEventListener('click', () => {
        popupForm.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        popupForm.classList.add('hidden');
    });

    nextButton.addEventListener('click', () => {
        popupForm.classList.add('hidden');
        paymentTunai.classList.remove('hidden');
    });

    backButton.addEventListener('click', () => {
        paymentTunai.classList.add('hidden');
        popupForm.classList.remove('hidden');
    });

    sentButton.addEventListener('click', () => {
        paymentTunai.classList.add('hidden');
        paymentTransfer.classList.remove('hidden');
    });

    backButton.addEventListener('click', () => {
        paymentTransfer.classList.add('hidden');
        paymentTunai.classList.remove('hidden');
    });
</script>