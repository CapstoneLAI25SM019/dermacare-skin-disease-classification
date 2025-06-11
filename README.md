# Dermacare App

## 1. Deskripsi Proyek
Dermacare App adalah solusi web berbasis deep learning yang membantu pengguna mengenali penyakit kulit secara mandiri melalui analisis gambar. Selain deteksi otomatis, sistem ini menyediakan informasi tentang penyakit kulit, gejala umum, dan saran penanganan awal. Aplikasi ini menggunakan **React + Vite** untuk frontend dan **Flask** untuk backend, dengan model deep learning yang diintegrasikan untuk klasifikasi penyakit kulit.

## 2. Dataset
Dataset untuk proyek ini dikumpulkan dari berbagai sumber terpercaya dan disatukan dalam satu repository. Dataset mencakup gambar penyakit kulit berikut, dengan tautan langsung ke sumbernya:

### 2.1 Cacar Air
- https://data.mendeley.com/datasets/dfztdtfsxz/1
- https://www.kaggle.com/datasets/sachinkumar413/monkeypox-images-dataset
- https://dermnetnz.org/images/varicella-images
- https://paperswithcode.com/dataset/mcsi

### 2.2 Eczema
- https://www.kaggle.com/datasets/pacificrm/skindiseasedataset

### 2.3 Jerawat
- https://www.kaggle.com/datasets/pacificrm/skindiseasedataset

### 2.4 Kudis (Scabies)
- https://data.mendeley.com/datasets/yj3md44hxg/1
- https://www.kaggle.com/datasets/shubhamgoel27/dermnet

### 2.5 Kurap (Ringworm)
- https://www.kaggle.com/datasets/rikimartuaskripsi/skin-diseases-data?select=Ringworm

### 2.6 Kutil (Warts)
- https://www.kaggle.com/datasets/pacificrm/skindiseasedataset

### 2.7 Lupus
- https://www.kaggle.com/datasets/arindamsaha07/skin-diesease-image-dataset

### 2.8 Psoriasis
- https://www.kaggle.com/datasets/pacificrm/skindiseasedataset

### 2.9 Rosacea
- https://www.kaggle.com/datasets/arindamsaha07/skin-diesease-image-dataset

### 2.10 Vitiligo
- https://www.kaggle.com/datasets/pacificrm/skindiseasedataset

## 3. Struktur Proyek
```
dermacare
├── backend
│   ├── app/
│   │   ├── model/
├── requirements.txt
├── run.py
├── frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contents/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── routes.jsx
│   ├── .env
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
├── dataset.zip
├── readme.md
```

## 4. Requirement
- **Node.js**: v18 atau lebih tinggi
- **Python**: v3.10.16
- **pip** / **virtualenv** (opsional, untuk lingkungan virtual Python)
- **Git**: untuk cloning repository
- **VS Code**: editor kode yang direkomendasikan
- **npm**: untuk mengelola dependensi frontend
- Browser modern (Chrome, Firefox, dll.) untuk menjalankan aplikasi

## 5. Cara Install Aplikasi

### 5.1 Clone Repository
- Clone repository yang sudah menyertakan source code, dataset, dan model:
   ```bash
   git clone https://github.com/CapstoneLAI25SM019/dermacare-skin-disease-classification.git
   cd dermacare-skin-disease-classification
   ```

### 5.2 Setup Backend (Flask)
- Masuk ke direktori backend:
   ```bash
   cd backend
   ```
- (Opsional) Buat virtual environment untuk isolasi dependensi:
   ```bash
   python -m venv env
   source env/bin/activate  # Linux/macOS
   # env\Scripts\activate.bat  # Windows
   ```
- Install dependensi Python yang diperlukan:
   ```bash
   pip install -r requirements.txt
   ```
- Jalankan aplikasi Flask:
   ```bash
   python run.py
   ```
- Pastikan server berjalan di `http://127.0.0.1:5000`. Catat URL endpoint API (misalnya, `http://127.0.0.1:5000/api/predict`) untuk digunakan di konfigurasi frontend.

### 5.3 Setup Frontend (React + Vite)
- Masuk ke direktori frontend:
   ```bash
   cd ../frontend
   ```
- Install Node.js (v18+) jika belum terinstall. Unduh dari [nodejs.org](https://nodejs.org).
- Install dependensi frontend:
   ```bash
   npm install
   ```
- Buat file `.env` di direktori `frontend/` dan tambahkan URL API dari backend:
   ```plaintext
   VITE_API_URL=http://127.0.0.1:5000/api/predict
   ```
- Build proyek (opsional, untuk production):
   ```bash
   npm run build
   ```
- Jalankan aplikasi dalam mode development:
   ```bash
   npm run dev
   ```

### 5.4 Setup API
- Pastikan backend sudah berjalan sebelum menjalankan frontend.
- URL API (misalnya, `http://127.0.0.1:5000/api/predict`) harus sesuai dengan endpoint yang disediakan oleh backend.
- Konfigurasi `VITE_API_URL` di file `.env` pada frontend harus mencerminkan URL endpoint backend yang benar.

### 5.5 Mengakses Website
- Setelah backend dan frontend berjalan dengan benar serta API telah dikonfigurasi, buka browser.
- Akses `http://localhost:5173` untuk melihat aplikasi Dermacare.
- Website siap digunakan untuk prediksi penyakit kulit berbasis gambar. Unggah gambar kulit melalui antarmuka web untuk mendapatkan hasil prediksi beserta informasi penyakit, gejala, dan saran penanganan.
