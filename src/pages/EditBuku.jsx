import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormBuku from '../components/FormBuku';
import { bukuApi } from '../api';

function EditBuku() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [buku, setBuku] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    bukuApi.getOne(id).then(setBuku).catch((err) => setError(err.message));
  }, [id]);

  const handleSubmit = async (data) => {
    await bukuApi.update(id, data);
    alert('Buku berhasil diperbarui!');
    navigate('/daftar');
  };

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!buku) return <p className="text-center text-muted">Memuat data...</p>;

  return (
    <FormBuku
      judulForm="Form Edit Buku"
      teksTombol="Simpan Perubahan"
      nilaiAwal={buku}
      onSubmit={handleSubmit}
    />
  );
}

export default EditBuku;