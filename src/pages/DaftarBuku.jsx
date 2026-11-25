import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bukuApi } from '../api';

function DaftarBuku() {
  const [bukuList, setBukuList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let batal = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError('');
        const data = await bukuApi.getAll(search);
        if (!batal) setBukuList(data);
      } catch (err) {
        if (!batal) setError(err.message);
      } finally {
        if (!batal) setLoading(false);
      }
    }, 300);

    return () => {
      batal = true;
      clearTimeout(timer);
    };
  }, [search]);

  const handleHapus = async (buku) => {
    if (!window.confirm(`Hapus buku "${buku.judul}"?`)) return;
    try {
      await bukuApi.remove(buku.id);
      setBukuList((prev) => prev.filter((b) => b.id !== buku.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h3 className="mb-3 text-primary fw-bold">Daftar Koleksi Buku</h3>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <p className="text-center text-muted">Memuat data...</p>
      ) : bukuList.length === 0 && !error ? (
        <div className="alert alert-warning text-center shadow-sm" role="alert">
          {search ? 'Buku tidak ditemukan' : 'Belum ada data Buku'}
        </div>
      ) : (
        <div className="row">
          {bukuList.map((buku) => (
            <div key={buku.id} className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm border-0 border-start border-4 border-primary rounded-start">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">{buku.judul}</h5>
                  <p className="card-text text-secondary">
                    Penulis: <strong>{buku.penulis}</strong>
                  </p>
                  <Link
                    to={`/edit/${buku.id}`}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleHapus(buku)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarBuku;