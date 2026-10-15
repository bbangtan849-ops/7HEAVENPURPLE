const usernameInput = document.getElementById('usernameInput');
const imageUpload = document.getElementById('imageUpload');
const uploadLabel = document.getElementById('uploadLabel');
const canvas = document.getElementById('resultCanvas');
const ctx = canvas.getContext('2d');
const placeholderText = document.getElementById('placeholderText');
const downloadBtn = document.getElementById('downloadBtn');
const charOptions = document.querySelectorAll('.char-option');

let uploadedImage = null;
let selectedCharText = "⭐ Character 1";

// Pilih Karakter
charOptions.forEach(option => {
    option.addEventListener('click', () => {
        charOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        selectedCharText = option.querySelector('span').innerText;
        if (uploadedImage) generateImage();
    });
});

// Tangkap Screenshot yang Diunggah
imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedImage = new Image();
            uploadedImage.onload = function() {
                canvas.style.display = 'block';
                placeholderText.style.display = 'none';
                downloadBtn.disabled = false;
                generateImage();
            }
            uploadedImage.src = event.target.result;
        }
        reader.readAsDataURL(file);
        uploadLabel.innerText = "📁 " + file.name;
    }
});

// Update Realtime saat Username Diketik
usernameInput.addEventListener('input', () => {
    if (uploadedImage) generateImage();
});

// Fungsi Menggabungkan Gambar & Teks ke Canvas
function generateImage() {
    // Atur ukuran canvas sesuai gambar asli
    canvas.width = uploadedImage.width;
    canvas.height = uploadedImage.height;

    // Gambar screenshot latar belakang
    ctx.drawImage(uploadedImage, 0, 0);

    // Styling Teks Watermark Username
    const username = usernameInput.value.trim() || "@yourusername";
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    
    // Kotak latar belakang teks di sudut bawah
    const padding = 20;
    const boxHeight = 60;
    ctx.fillRect(padding, canvas.height - boxHeight - padding, canvas.width - (padding * 2), boxHeight);

    // Teks Username
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px 'Poppins', sans-serif";
    ctx.fillText(username, padding + 20, canvas.height - boxHeight - padding + 38);

    // Teks Karakter Pilihan di pojok kanan atas kotak
    ctx.fillStyle = "#d8b4fe";
    ctx.font = "20px 'Poppins', sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(selectedCharText, canvas.width - padding - 20, canvas.height - boxHeight - padding + 38);
    ctx.textAlign = "left"; // Reset align
}

// Tombol Download
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = '7heavenpurple-result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
