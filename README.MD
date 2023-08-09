# url-shortener

Pemendek url menggunakan Express js dan Firestore sebagai database

## Cara menjalankan projek

Berikut ini adalah langkah-langkah untuk menjalankan projek ini

### Langkah Pertama

Clone repository ini dan install semua dependensi yang diperlukan, menggunakan perintah:

```sh
git clone https://github.com/dapkniht/url-shortener.git
cd url-shortener
npm install
```

### Langkah Kedua

Unduh service account Firebase anda, ubah namanya menjadi key.json, dan salin ke `src/config/` di dalam direktori url-shortener

### Langkah Ketiga

Ubah nama file `.env.example` ke `.env`. Kemudian ubahlah isi dari file `.env` sesuai dengan petunjuk yang diberikan.

### Langkah Keempat

Jalankan projek menggunakan perintah:

```sh
npm run start-dev
```

## API Endpoints

### 1. /shorten

- **Deskripsi:**
  - Pendekan sebuah url
- **Method:**

  - `POST`

- **Request Body:**
  - `url` sebagai `string`
  - `short_code` sebagai `string` `opsional`
- **Response:**
  ```JSON
   {
    "status": "success",
    "data": {
        "original_url": "https://google.com",
        "short_code": "ldnwEWs",
        "created_at": "2023-08-09T11:44:31.485Z",
        "click_count": 0
        }
    }
  ```

### 2. /{short_code}

- **Deskripsi:**
  - Dapatkan original url dari short code
- **Method:**

  - `GET`

- **Path:**
  - `short_code` short code dari original url
- **Response:**
  ```JSON
   {
    "status": "success",
    "data": {
        "original_url": "https://google.com",
        "short_code": "ldnwEWs"
     }
    }
  ```
