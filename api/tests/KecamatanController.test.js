// tests/KecamatanController.test.js

// 1) Mock model Kecamatan sebelum import controller
jest.mock('../models/Kecamatan.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

// 2) Import controller setelah model di‑mock
const {
  getKecamatans,
  getKecamatanById,
  saveKecamatan,
  updateKecamatan,
  deleteKecamatan,
} = require('../controllers/KecamatanController.js');

// Helper untuk membuat objek res mock
const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('KecamatanController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getKecamatans: Harus menampilkan Data', async () => {
    const mockData = [{ id:1, kecamatan:'A' }, { id:2, kecamatan:'B' }];
    const Kecamatan = require('../models/Kecamatan.js');
    Kecamatan.findAll.mockResolvedValue(mockData);

    const res = makeRes();
    await getKecamatans({}, res);

    expect(Kecamatan.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  

  it('saveKecamatan: Harus Menyimpan Data', async () => {
    const Kecamatan = require('../models/Kecamatan.js');
    Kecamatan.create.mockResolvedValue();

    const req = { body: { kecamatan: 'D' } };
    const res = makeRes();
    await saveKecamatan(req, res);

    expect(Kecamatan.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Kecamatan Berhasil Ditambahkan' });
  });

  it('updateKecamatan: Harus mengedit Data', async () => {
    const Kecamatan = require('../models/Kecamatan.js');
    Kecamatan.update.mockResolvedValue();

    const req = { params: { id: 4 }, body: { kecamatan: 'E' } };
    const res = makeRes();
    await updateKecamatan(req, res);

    expect(Kecamatan.update).toHaveBeenCalledWith(req.body, { where: { id: 4 } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Kecamatan Berhasil Diupdate' });
  });

  it('deleteKecamatan: harus menghapus data ', async () => {
    const Kecamatan = require('../models/Kecamatan.js');
    Kecamatan.destroy.mockResolvedValue();

    const req = { params: { id: 5 } };
    const res = makeRes();
    await deleteKecamatan(req, res);

    expect(Kecamatan.destroy).toHaveBeenCalledWith({ where: { id: 5 } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Kecamatan Berhasil Dihapus' });
  });
});
