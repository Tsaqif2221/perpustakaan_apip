import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormBuku from '../components/FormBuku';
import { bukuApi } from '../api';

function TambahBuku() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await bukuApi.create(data);
    alert('Buku berhasil ditambahkan!');
    navigate('/daftar');
  };

  return (
    <FormBuku
      judulForm="Form Tambah Buku"
      teksTombol="Simpan Buku"
      onSubmit={handleSubmit}
    />
  );
}

export default TambahBuku;