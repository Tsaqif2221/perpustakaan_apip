import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import DaftarBuku from './pages/DaftarBuku';
import TambahBuku from './pages/TambahBuku';

function App() {
  // State terpusat untuk menyimpan daftar buku[cite: 1]
  const [bukuList, setBukuList] = useState([
  ]);

  const tambahBuku = (judulBaru, penulisBaru) => {
    const bukuBaru = {
      id: Date.now(),
      judul: judulBaru,
      penulis: penulisBaru
    };
    setBukuList([...bukuList, bukuBaru]);
  };

  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Beranda bukuList={bukuList} />} />
          <Route path="/daftar" element={<DaftarBuku bukuList={bukuList} />} />
          <Route path="/tambah" element={<TambahBuku onTambahBuku={tambahBuku} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;