// tests/SyaratTambahanController.test.js

// 1) Mock model SyaratTambahan sebelum import controller
jest.mock('../models/SyaratTambahanModel.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

// 2) Import controller setelah mock
const {
  getSyaratTambahans,
  getSyaratTambahanById,
  saveSyaratTambahan,
  updateSyaratTambahan,
  deleteSyaratTambahan,
} = require('../controllers/SyaratTambahanController.js');

// helper untuk membuat objek `res` mock
const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('SyaratTambahanController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getSyaratTambahans: Menampilkan Data', async () => {
    const mockData = [{ id_syarat_tambahan: 1, deskripsi_syarat_tambahan: 'X' }];
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    SyaratTambahan.findAll.mockResolvedValue(mockData);

    const res = makeRes();
    await getSyaratTambahans({}, res);

    expect(SyaratTambahan.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  
  it('saveSyaratTambahan: menyimpan data', async () => {
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    SyaratTambahan.create.mockResolvedValue();

    const req = { body: { deskripsi_syarat_tambahan: 'Z' } };
    const res = makeRes();
    await saveSyaratTambahan(req, res);

    expect(SyaratTambahan.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'SyaratTambahan Berhasil Ditambahkan' });
  });

  it('updateSyaratTambahan: mengedit data', async () => {
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    SyaratTambahan.update.mockResolvedValue();

    const req = { params: { id: 3 }, body: { deskripsi_syarat_tambahan: 'W' } };
    const res = makeRes();
    await updateSyaratTambahan(req, res);

    expect(SyaratTambahan.update).toHaveBeenCalledWith(req.body, {
      where: { id_syarat_tambahan: 3 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Syarat Tambahan Berhasil Diupdate' });
  });

  it('deleteSyaratTambahan: menghapus data', async () => {
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    SyaratTambahan.destroy.mockResolvedValue();

    const req = { params: { id: 4 } };
    const res = makeRes();
    await deleteSyaratTambahan(req, res);

    expect(SyaratTambahan.destroy).toHaveBeenCalledWith({
      where: { id_syarat_tambahan: 4 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Syarat Tambahan Berhasil Dihapus' });
  });
});
