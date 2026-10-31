import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Perpustakaan Mini</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Beranda</Link>
          <Link className="nav-link" to="/daftar">Daftar Buku</Link>
          <Link className="nav-link" to="/tambah">Tambah Buku</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;