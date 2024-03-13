// Function untuk menghitung BMI
function calculateBMI() {
    // Mengambil nilai input umur, berat badan, dan tinggi badan dari formulir
    const inputUmur = parseFloat(document.querySelector('input[name="umur"]').value);
    const beratBadan = parseFloat(document.querySelector('input[name="berat_badan"]').value);
    const tinggiBadan = parseFloat(document.querySelector('input[name="tinggi_badan"]').value) / 100; // Konversi tinggi ke meter

    // Validasi input
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(inputUmur) || beratBadan <= 0 || tinggiBadan <= 0 || inputUmur <= 0) {
        // Jika input tidak valid, tampilkan pesan validasi
        displayValidationMessage("Mohon lengkapi semua input dengan benar.");
        return;
    }

    // Menghitung BMI
    let bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Interpretasi BMI
    let status = "";
    let hasilBerat = "";
    if (bmi < 18.5) {
        status = "Kekurangan berat badan";
        hasilBerat = "Berat badan kurang";
    } else if (bmi <= 24.9) {
        status = "Normal (ideal)";
        hasilBerat = "Berat badan normal";
    } else if (bmi <= 29.9) {
        status = "Kelebihan berat badan";
        hasilBerat = "Berat badan kelebihan";
    } else {
        status = "Kegemukan (Obesitas)";
        hasilBerat = "Berat badan kegemukan";
    }

    // Menampilkan hasil BMI dan interpretasi
    document.getElementById('hasil-bmi').innerText = bmi.toFixed(1);
    document.getElementById('status-bmi').innerText = status;
    document.getElementById('hasil-berat').innerText = hasilBerat;
    clearValidationMessage(); // Menghapus pesan validasi jika valid
}

// Function untuk menampilkan pesan validasi
function displayValidationMessage(message) {
    document.getElementById('pesan-validasi').innerText = message;
}

// Function untuk menghapus pesan validasi
function clearValidationMessage() {
    document.getElementById('pesan-validasi').innerText = "";
}

// Event listener untuk tombol hitung BMI
document.getElementById('hitung_bmi').addEventListener('click', calculateBMI);

// Event listener untuk tombol reset
document.getElementById('reset').addEventListener('click', function () {
    // Mereset nilai input dan hasil BMI
    document.querySelectorAll('input[type="number"]').forEach(function (input) {
        input.value = "";
    });
    document.getElementById('hasil-bmi').innerText = "";
    document.getElementById('status-bmi').innerText = "";
    document.getElementById('hasil-berat').innerText = "";
    clearValidationMessage(); // Menghapus pesan validasi jika direset
});
