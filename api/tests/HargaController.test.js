// tests/HargaController.test.js

// 1) Mock asosiasi model yang memanggil hasMany()
jest.mock('../models/PerkaraModel.js', () => ({
  hasMany: jest.fn(),
}));
jest.mock('../models/SyaratModel.js', () => {
  return class SyaratMock {};
});
jest.mock('../models/SyaratTambahanModel.js', () => {
  return class SyaratTambahanMock {};
});
jest.mock('../models/CatatanModel.js', () => {
  return class CatatanMock {};
});

// 2) Mock model Harga sepenuhnya
jest.mock('../models/Harga.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  bulkCreate: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

// 3) Sekarang import controller setelah semua mock di atas
const {
  getHargas,
  getHargaById,
  saveHarga,
  saveHargas,
  updateHarga,
  deleteHarga,
} = require('../controllers/HargaController.js');

describe('HargaController', () => {
  // helper untuk membuat objek res mock
  const makeRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json   = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    // reset semua mock antara tiap test
    jest.clearAllMocks();
  });

  it('getHargas: Harus Memunculkan Data Harga', async () => {
    const mockData = [{ id: 1 }, { id: 2 }];
    const Harga = require('../models/Harga.js');
    Harga.findAll.mockResolvedValue(mockData);

    const res = makeRes();
    await getHargas({}, res);

    expect(Harga.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  

  it('saveHarga: Harus Menambah Data', async () => {
    const Harga = require('../models/Harga.js');
    Harga.create.mockResolvedValue({});

    const req = { body: { radius: 3, pendaftaran: 30000 } };
    const res = makeRes();
    await saveHarga(req, res);

    expect(Harga.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Harga Berhasil Ditambahkan' });
  });

  

  

  it('updateHarga: Harus Mengupadate Data Harga', async () => {
    const Harga = require('../models/Harga.js');
    Harga.update.mockResolvedValue([1]);

    const req = { params: { id: 7 }, body: { pendaftaran: 50000 } };
    const res = makeRes();
    await updateHarga(req, res);

    expect(Harga.update).toHaveBeenCalledWith(req.body, { where: { id: 7 } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Harga Berhasil Diupdate' });
  });

  it('deleteHarga: harus memanggil Menghapus Data', async () => {
    const Harga = require('../models/Harga.js');
    Harga.destroy.mockResolvedValue(1);

    const req = { params: { id: 9 } };
    const res = makeRes();
    await deleteHarga(req, res);

    expect(Harga.destroy).toHaveBeenCalledWith({ where: { id: 9 } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Harga Berhasil Dihapus' });
  });
});
