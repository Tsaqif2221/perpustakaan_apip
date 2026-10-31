import React from 'react';

function DaftarBuku(props) {
  return (
    <div>
      <h3 className="mb-4 text-primary fw-bold">Daftar Koleksi Buku</h3>
      {props.bukuList.length === 0 ? (
        <div className="alert alert-warning text-center shadow-sm" role="alert">
          Belum ada data Buku
        </div>
      ) : (
        <div className="row">
          {props.bukuList.map((buku) => (
            <div key={buku.id} className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm border-0 border-start border-4 border-primary rounded-start">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">{buku.judul}</h5>
                  <p className="card-text text-secondary mb-0">
                    Penulis: <strong>{buku.penulis}</strong>
                  </p>
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