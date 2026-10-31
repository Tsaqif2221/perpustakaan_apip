import React from 'react';
import { Link } from 'react-router-dom';

function Beranda(props) {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold text-primary">Selamat Datang di Perpustakaan Mini</h1>
          <p className="col-md-8 fs-4 text-muted">
            Sistem manajemen katalog buku sederhana untuk mencatat dan mengelola koleksi buku.
          </p>
          <Link to="/daftar" className="btn btn-primary btn-lg mt-2">
            Lihat Koleksi Buku
          </Link>
        </div>
      </div>

      <div className="row text-center">
          <div className="card shadow-sm border-primary">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Koleksi Buku</h5>
              <h2 className="display-4 fw-bold text-primary">{props.bukuList.length}</h2>
              <p className="card-text">Buku terdaftar dalam sistem</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Beranda;