// tests/AuthController.test.js

// 1) Mock dependencies sebelum import controller
jest.mock('../models/User.js', () => ({
  findOne: jest.fn(),
}));
jest.mock('bcryptjs', () => ({
  compare: jest.fn(),
}));
jest.mock('../utils/generateTokenAndSetCookie.js', () => ({
  generateTokenAndSetCookie: jest.fn((res, userId) => {
    // jangan set cookie beneran, cukup stub
    res.cookie = jest.fn();
  }),
}));

// tests/AuthController.test.js

// Mock Brevo config agar TransactionalEmailsApi tidak error
jest.mock('../mailtrap/brevo.config.js', () => {
  return {
    TransactionalEmailsApi: jest.fn().mockImplementation(() => ({
      // stub method apa pun jika diperlukan, misal sendTransacEmail
      sendTransacEmail: jest.fn().mockResolvedValue({}),
    })),
    TransactionalEmailsApiApiKeys: {
      apiKey: 'apiKey'
    }
  };
});

// Mock modul email supaya panggilan sendXXXEmail juga tidak error
jest.mock('../mailtrap/emails.js', () => ({
  sendPasswordResetEmail: jest.fn().mockResolvedValue(),
  sendResetSuccessEmail: jest.fn().mockResolvedValue(),
  sendVerificationEmail: jest.fn().mockResolvedValue(),
  sendWelcomeEmail: jest.fn().mockResolvedValue(),
}));

// Mock model dan bcryptjs, generateToken, dsb. . . .


// 2) Import controller setelah mock
const { login } = require('../controllers/AuthController.js');
const User = require('../models/User.js');
const bcryptjs = require('bcryptjs');
const { generateTokenAndSetCookie } = require('../utils/generateTokenAndSetCookie.js');

describe('AuthController.login', () => {
  // helper untuk req/res
  const makeReqRes = ({ email, password } = {}) => {
    const req = { body: { email, password } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json:   jest.fn().mockReturnThis(),
      clearCookie: jest.fn(),
      cookie: jest.fn(),
    };
    return { req, res };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  

  it('Berhasi Login', async () => {
    // mock existing user
    const fakeUser = {
      id: 42,
      password: 'hashed',
      email: 'u@x',
      name: 'User',
      role: 'user',
      save: jest.fn(),
    };
    User.findOne.mockResolvedValue(fakeUser);
    bcryptjs.compare.mockResolvedValue(true);

    const { req, res } = makeReqRes({ email: 'u@x', password: 'right' });
    await login(req, res);

    // harus memanggil compare dan generateToken
    expect(bcryptjs.compare).toHaveBeenCalledWith('right', 'hashed');
    expect(generateTokenAndSetCookie).toHaveBeenCalledWith(res, 42);

    // lastLogin diupdate lalu save dipanggil
    expect(fakeUser.lastLogin).toBeInstanceOf(Date);
    expect(fakeUser.save).toHaveBeenCalled();

    // response 200 dengan payload user tanpa password
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Logged in successfully',
      user: {
        id: 42,
        email: 'u@x',
        name: 'User',
        role: 'user',
      },
    });
  });
});
