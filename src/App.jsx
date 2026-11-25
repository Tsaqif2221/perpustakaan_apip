import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import DaftarBuku from './pages/DaftarBuku';
import TambahBuku from './pages/TambahBuku';
import EditBuku from './pages/EditBuku';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/daftar" element={<DaftarBuku />} />
          <Route path="/tambah" element={<TambahBuku />} />
          <Route path="/edit/:id" element={<EditBuku />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;