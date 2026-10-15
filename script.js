* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #ff9100;
    background-image: linear-gradient(135deg, #ff9100 0%, #ff6d00 100%);
    color: #333;
    min-height: 100vh;
    padding: 20px;
    position: relative;
    overflow-x: hidden;
    transition: background 0.4s ease;
}

/* Dekorasi Latar Belakang */
.page-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.bg-sticker {
    position: absolute;
    font-size: 2rem;
    animation: float 3s ease-in-out infinite;
}

.star-1 { top: 2%; left: 5%; animation-delay: 0s; }
.star-2 { top: 15%; right: 5%; animation-delay: 1s; }
.star-3 { bottom: 10%; left: 8%; animation-delay: 1.5s; }
.star-4 { bottom: 25%; right: 7%; animation-delay: 0.5s; }

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(8deg); }
}

.container {
    max-width: 480px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* Header */
.header-card {
    text-align: center;
    margin-bottom: 24px;
    padding: 10px;
}

.main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
    letter-spacing: 2px;
}

.sub-title {
    font-size: 0.85rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    background: rgba(0, 0, 0, 0.15);
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    margin-top: 5px;
}

/* Kartu Form */
.card {
    background: #ffffff;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border: 3px solid #ffe0b2;
}

.card h2 {
    font-size: 1.05rem;
    color: #e65100;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.step-num {
    background: #ff9100;
    color: white;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: bold;
}

.desc {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 12px;
}

/* Input Username */
input[type="text"] {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #ffe0b2;
    border-radius: 12px;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.3s;
    background: #fff8e1;
}

input[type="text"]:focus {
    border-color: #ff9100;
    background: #fff;
    box-shadow: 0 0 8px rgba(255, 145, 0, 0.3);
}

/* Grid Pilihan Karakter */
.character-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.char-option {
    background: #fff3e0;
    border: 2px solid #ffe0b2;
    border-radius: 12px;
    padding: 10px 6px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.char-option:hover {
    transform: translateY(-3px);
}

.char-option.active {
    background: #ffe0b2;
    border-color: #ff9100;
    box-shadow: 0 4px 10px rgba(255, 145, 0, 0.25);
}

.char-box {
    font-size: 1.8rem;
    margin-bottom: 4px;
}

.char-option span:not(.char-box) {
    font-size: 0.7rem;
    font-weight: 600;
    color: #d84315;
    display: block;
}

/* Grid Pilihan Latar Belakang */
.bg-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.bg-option {
    border-radius: 12px;
    padding: 14px 6px;
    text-align: center;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s ease;
}

.bg-option span {
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
}

.bg-option:hover {
    transform: translateY(-2px);
}

.bg-option.active {
    border-color: #212121;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

/* Kotak Upload */
.upload-box {
    border: 2px dashed #ffb74d;
    background: #fff8e1;
    border-radius: 14px;
    padding: 24px 16px;
    display: block;
    text-align: center;
    cursor: pointer;
    color: #e65100;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s;
}

.upload-box:hover {
    background: #ffe0b2;
    border-color: #ff9100;
}

/* Preview Area */
.preview-container {
    background: #fff8e1;
    border-radius: 14px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 12px;
    border: 2px solid #ffe0b2;
}

.placeholder-text {
    color: #f57c00;
    font-size: 0.85rem;
    text-align: center;
    padding: 20px;
    font-weight: 500;
}

/* Tombol Download */
.download-btn {
    width: 100%;
    background: linear-gradient(135deg, #ff9100 0%, #e65100 100%);
    color: white;
    border: none;
    padding: 14px;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(230, 81, 0, 0.3);
    transition: all 0.3s;
}

.download-btn:disabled {
    background: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
    box-shadow: none;
}

.download-btn:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 81, 0, 0.4);
}

/* Footer Badge / Banner */
.footer-badge {
    background: #ffffff;
    border: 2px solid #ffe0b2;
    border-radius: 30px;
    padding: 10px 16px;
    text-align: center;
    margin-bottom: 16px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.footer-badge span {
    font-size: 0.75rem;
    font-weight: 700;
    color: #e65100;
    letter-spacing: 0.5px;
}

footer {
    text-align: center;
    color: #fff;
    font-size: 0.75
