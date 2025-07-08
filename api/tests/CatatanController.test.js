// tests/CatatanController.test.js

// 1) Mock model Catatan sebelum import controller
jest.mock('../models/CatatanModel.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

// 2) Import controller setelah mock
const {
  getCatatans,
  getCatatanById,
  saveCatatan,
  updateCatatan,
  deleteCatatan,
} = require('../controllers/CatatanController.js');

// helper untuk membuat objek `res` mock
const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('CatatanController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getCatatans: Menampilkan data', async () => {
    const mockData = [{ id_catatan: 1, nama_catatan: 'Note A' }];
    const Catatan = require('../models/CatatanModel.js');
    Catatan.findAll.mockResolvedValue(mockData);

    const res = makeRes();
    await getCatatans({}, res);

    expect(Catatan.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

 
  it('saveCatatan: menyimpan data', async () => {
    const Catatan = require('../models/CatatanModel.js');
    Catatan.create.mockResolvedValue();

    const req = { body: { nama_catatan: 'Note C' } };
    const res = makeRes();
    await saveCatatan(req, res);

    expect(Catatan.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Catatan Berhasil Ditambahkan' });
  });

  it('updateCatatan: mengedit data', async () => {
    const Catatan = require('../models/CatatanModel.js');
    Catatan.update.mockResolvedValue();

    const req = { params: { id: 3 }, body: { nama_catatan: 'Note D' } };
    const res = makeRes();
    await updateCatatan(req, res);

    expect(Catatan.update).toHaveBeenCalledWith(req.body, {
      where: { id_catatan: 3 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Catatan Berhasil Diupdate' });
  });

  it('deleteCatatan: menghapus data', async () => {
    const Catatan = require('../models/CatatanModel.js');
    Catatan.destroy.mockResolvedValue();

    const req = { params: { id: 4 } };
    const res = makeRes();
    await deleteCatatan(req, res);

    expect(Catatan.destroy).toHaveBeenCalledWith({
      where: { id_catatan: 4 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Catatan Berhasil Dihapus' });
  });
});
