// tests/UserController.test.js

// 1) Mock dependencies sebelum import controller
jest.mock('../models/User.js', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));
jest.mock('bcryptjs', () => ({
  hash: jest.fn(() => Promise.resolve('hashed_pass')),
}));

// Force Math.random untuk deterministik
const ORIGINAL_RANDOM = Math.random;
beforeAll(() => {
  Math.random = () => 0.5; // selalu 0.5 -> token 500000
});
afterAll(() => {
  Math.random = ORIGINAL_RANDOM;
});

// 2) Import controller setelah mock  
const {
  getUsers,
  getUsersById,
  getUsersRoleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/UserController.js');

describe('UserController', () => {
  const makeReqRes = (overrides = {}) => {
    const req = { params: {}, query: {}, body: {} , ...overrides.req };
    const res = {
      status: jest.fn().mockReturnThis(),
      json:   jest.fn().mockReturnThis(),
    };
    return { req, res };
  };

  afterEach(() => jest.clearAllMocks());

  /*** getUsers ***/
  it('getUsers: Manampilkan data', async () => {
    const mock = [{ id:1, name:'A', email:'a@x', role:'user' }];
    const User = require('../models/User.js');
    User.findAll.mockResolvedValue(mock);

    const { req, res } = makeReqRes();
    await getUsers(req, res);

    expect(User.findAll).toHaveBeenCalledWith({
      attributes: ['id','name','email','role']
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mock);
  });

  /*** getUsersById ***/
  

  /*** createUser ***/
 

  it('createUser: Menambah data', async () => {
  const User = require('../models/User.js');
  User.findOne.mockResolvedValue(null);

  // Stub Math.random agar selalu menghasilkan 0.5 sehingga
  // token = Math.floor(100000 + 0.5*900000).toString() === "550000"
  jest.spyOn(Math, 'random').mockReturnValue(0.5);

  const { req, res } = makeReqRes({
    req:{
      body:{ email:'y@y', password:'pw', name:'Name', role:'user' }
    }
  });

  await createUser(req, res);

  // Pastikan cek keberadaan user pertama
  expect(User.findOne).toHaveBeenCalledWith({ where:{ email:'y@y' } });
  // Pastikan hash dipanggil
  expect(require('bcryptjs').hash).toHaveBeenCalledWith('pw', 10);

  // Cek User.create dengan objectContaining + any(Number)
  expect(User.create).toHaveBeenCalledWith(expect.objectContaining({
    email: 'y@y',
    password: 'hashed_pass',
    name: 'Name',
    role: 'user',
    verificationToken: '550000',           // sesuai mock random
    isVerified: 1,
    verificationTokenExpiresAt: expect.any(Number),
  }));

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith({ msg:'register berhasil' });

  Math.random.mockRestore(); // kembalikan stub
});

 
  it('updateUser: mengedit data', async () => {
    const User = require('../models/User.js');
    // mock existing user
    User.findOne.mockResolvedValue({
      id:6, email:'e', password:'old', name:'O', role:'user'
    });
    User.update.mockResolvedValue();

    const { req, res } = makeReqRes({
      req:{
        params:{ id:6 },
        body:{ name:'New', email:'new@x', password:'', role:'admin' }
      }
    });

    await updateUser(req, res);

    expect(User.update).toHaveBeenCalledWith({
      email:'new@x',
      password:'old',
      name:'New',
      role:'admin',
      isVerified:1,
      verificationTokenExpiresAt: expect.any(Number),
    }, { where:{ id:6 } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg:'User Updated berhasil' });
  });

  

  /*** deleteUser ***/
  it('deleteUser: menghapus data', async () => {
    const User = require('../models/User.js');
    User.findOne.mockResolvedValue(null);
    const { req, res } = makeReqRes({ req:{ params:{ id:8 } } });

    await deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ msg:'User Not Found' });
  });

 
});
