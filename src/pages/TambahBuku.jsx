import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TambahBuku(props) {
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (judul.trim() === '' || penulis.trim() === '') {
      alert('Judul dan Penulis wajib diisi!');
      return;
    }

    props.onTambahBuku(judul, penulis);
    alert('Buku berhasil ditambahkan!');
    navigate('/daftar');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Form Tambah Buku</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Judul Buku</label>
                <input
                  type="text"
                  className="form-control"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Masukkan judul buku"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Penulis</label>
                <input
                  type="text"
                  className="form-control"
                  value={penulis}
                  onChange={(e) => setPenulis(e.target.value)}
                  placeholder="Masukkan nama penulis"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Simpan Buku
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahBuku;