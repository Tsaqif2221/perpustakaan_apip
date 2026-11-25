const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      headers: options.body ? { 'Content-Type': 'application/json' } : {},
      ...options,
    });
  } catch {
    throw new Error('Tidak dapat terhubung ke server. Pastikan backend berjalan.');
  }

  if (res.status === 204) return null;

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const pesan = Array.isArray(data?.message)
      ? data.message.join('\n')
      : data?.message;
    throw new Error(pesan || `Terjadi kesalahan (${res.status})`);
  }
  return data;
}

export const bukuApi = {
  getAll: (search = '') =>
    request(search ? `/buku?search=${encodeURIComponent(search)}` : '/buku'),
  getOne: (id) => request(`/buku/${id}`),
  getStats: () => request('/buku/stats'),
  create: (data) =>
    request('/buku', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/buku/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id) => request(`/buku/${id}`, { method: 'DELETE' }),
};