import React, { useState } from 'react';

function FormBuku({ judulForm, teksTombol, nilaiAwal, onSubmit }) {
  const [judul, setJudul] = useState(nilaiAwal?.judul ?? '');
  const [penulis, setPenulis] = useState(nilaiAwal?.penulis ?? '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (judul.trim() === '' || penulis.trim() === '') {
      alert('Judul dan Penulis wajib diisi!');
      return;
    }

    try {
      setLoading(true);
      await onSubmit({ judul: judul.trim(), penulis: penulis.trim() });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">{judulForm}</h4>
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
              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
                disabled={loading}
              >
                {loading ? 'Menyimpan...' : teksTombol}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBuku;