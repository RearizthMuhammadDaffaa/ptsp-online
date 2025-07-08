// tests/PerkaraController.test.js

// 1) Mock model dan association sebelum import controller
jest.mock('../models/PerkaraModel.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));
jest.mock('../models/SyaratModel.js',   () => jest.fn());
jest.mock('../models/SyaratTambahanModel.js', () => jest.fn());
jest.mock('../models/CatatanModel.js',  () => jest.fn());

// 2) Import controller setelah mock
const {
  getPerkaras,
  getPerkarasAndSyarat,
  getPerkarasAndSyaratById,
  getPerkaraById,
  savePerkara,
  updatePerkara,
  deletePerkara,
} = require('../controllers/PerkaraController.js');

// helper membuat res mock
const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe('PerkaraController', () => {
  afterEach(() => jest.clearAllMocks());

  

  it('getPerkarasAndSyarat: harus menampilan data', async () => {
    const mock = [{ id_perkara:2 }];
    const Perkara = require('../models/PerkaraModel.js');
    const Syarat = require('../models/SyaratModel.js');
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    const Catatan = require('../models/CatatanModel.js');
    Perkara.findAll.mockResolvedValue(mock);

    const res = makeRes();
    await getPerkarasAndSyarat({}, res);

    expect(Perkara.findAll).toHaveBeenCalledWith({
      include: [Syarat, SyaratTambahan, Catatan]
    });
    expect(res.json).toHaveBeenCalledWith(mock);
  });

  it('getPerkarasAndSyaratById: Menampilkan Detail Data', async () => {
    const mock = { id_perkara:3 };
    const Perkara = require('../models/PerkaraModel.js');
    const Syarat = require('../models/SyaratModel.js');
    const SyaratTambahan = require('../models/SyaratTambahanModel.js');
    const Catatan = require('../models/CatatanModel.js');
    Perkara.findOne.mockResolvedValue(mock);

    const req = { params: { id: 3 } };
    const res = makeRes();
    await getPerkarasAndSyaratById(req, res);

    expect(Perkara.findOne).toHaveBeenCalledWith({
      where: { id_perkara: 3 },
      include: [Syarat, SyaratTambahan, Catatan]
    });
    expect(res.json).toHaveBeenCalledWith(mock);
  });

  

 

  it('savePerkara: harus menyimpan data', async () => {
    const Perkara = require('../models/PerkaraModel.js');
    Perkara.create.mockResolvedValue();

    const req = { body: { name:'X', title1:'T1', title2:'T2' } };
    const res = makeRes();
    await savePerkara(req, res);

    expect(Perkara.create).toHaveBeenCalledWith({
      name: 'X',
      title1: 'T1',
      title2: 'T2'
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg:'Perkara Berhasil Ditambahkan' });
  });

  it('updatePerkara: harus mengedit data', async () => {
    const Perkara = require('../models/PerkaraModel.js');
    Perkara.update.mockResolvedValue();

    const req = { params:{ id:5 }, body:{ name:'Y', title1:'A', title2:'B' } };
    const res = makeRes();
    await updatePerkara(req, res);

    expect(Perkara.update).toHaveBeenCalledWith({
      name:'Y', title1:'A', title2:'B'
    }, {
      where:{ id_perkara:5 }
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg:'Perkara Berhasil Diupdate' });
  });

  it('deletePerkara: Harus Menghapus Data', async () => {
    const Perkara = require('../models/PerkaraModel.js');
    Perkara.destroy.mockResolvedValue();

    const req = { params:{ id:6 } };
    const res = makeRes();
    await deletePerkara(req, res);

    expect(Perkara.destroy).toHaveBeenCalledWith({
      where:{ id_perkara:6 }
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg:'Perkara Berhasil Dihapus' });
  });
});
