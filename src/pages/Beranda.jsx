import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bukuApi } from '../api';

function Beranda() {
  const [stats, setStats] = useState({ total: 0, totalPenulis: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    bukuApi.getStats().then(setStats).catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold text-primary">
            Selamat Datang di Perpustakaan Mini
          </h1>
          <p className="col-md-8 fs-4 text-muted">
            Sistem manajemen katalog buku sederhana untuk mencatat dan mengelola
            koleksi buku.
          </p>
          <Link to="/daftar" className="btn btn-primary btn-lg mt-2">
            Lihat Koleksi Buku
          </Link>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row text-center g-3">
        <div className="col-md-6">
          <div className="card shadow-sm border-primary h-100">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Koleksi Buku</h5>
              <h2 className="display-4 fw-bold text-primary">{stats.total}</h2>
              <p className="card-text">Buku terdaftar dalam sistem</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm border-primary h-100">
            <div className="card-body">
              <h5 className="card-title text-muted">Jumlah Penulis</h5>
              <h2 className="display-4 fw-bold text-primary">
                {stats.totalPenulis}
              </h2>
              <p className="card-text">Penulis berbeda dalam koleksi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;