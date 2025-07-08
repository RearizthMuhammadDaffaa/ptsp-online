// tests/SyaratController.test.js

// 1) Mock model Syarat sebelum import controller
jest.mock('../models/SyaratModel.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

// 2) Import controller setelah mock
const {
  getSyarats,
  getSyaratById,
  saveSyarat,
  updateSyarat,
  deleteSyarat,
} = require('../controllers/SyaratController.js');

// helper untuk membuat objek `res`
const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('SyaratController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getSyarats: harus menampilkan data', async () => {
    const mock = [{ id_syarat: 1, deskripsi_syarat: 'A' }];
    const Syarat = require('../models/SyaratModel.js');
    Syarat.findAll.mockResolvedValue(mock);

    const res = makeRes();
    await getSyarats({}, res);

    expect(Syarat.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mock);
  });

 
  it('saveSyarat: harus menyimpan data', async () => {
    const Syarat = require('../models/SyaratModel.js');
    Syarat.create.mockResolvedValue();

    const req = { body: { deskripsi_syarat: 'C', opsional: 0 } };
    const res = makeRes();
    await saveSyarat(req, res);

    expect(Syarat.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Syarat Berhasil Ditambahkan' });
  });

  it('updateSyarat: harus mengedit data', async () => {
    const Syarat = require('../models/SyaratModel.js');
    Syarat.update.mockResolvedValue();

    const req = { params: { id: 3 }, body: { deskripsi_syarat: 'D' } };
    const res = makeRes();
    await updateSyarat(req, res);

    expect(Syarat.update).toHaveBeenCalledWith(req.body, {
      where: { id_syarat: 3 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Syarat Berhasil Diupdate' });
  });

  it('deleteSyarat: Harus Manghapus Data', async () => {
    const Syarat = require('../models/SyaratModel.js');
    Syarat.destroy.mockResolvedValue();

    const req = { params: { id: 4 } };
    const res = makeRes();
    await deleteSyarat(req, res);

    expect(Syarat.destroy).toHaveBeenCalledWith({
      where: { id_syarat: 4 },
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'Syarat Berhasil Dihapus' });
  });
});
