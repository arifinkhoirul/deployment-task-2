const request = require('supertest');
const app = require('./../index');
const auth = require('./../app/middlewares/auth');
const authService = require('./../app/services/auth');
// const CarController = require("./../app/controllers/car");
// const carService = require("./../app/services/car");

// jest.mock('./../app/services/auth', () => ({
//   authorize: jest.fn(),
// }));

// jest.mock("./../app/services/car", () => ({
//   listCar: jest.fn(),
// }));

describe('GET /cars', () => {
  // it('should return token', async () => {
  //   const user = {
  //     id: 1,
  //     name: 'User',
  //     email: 'user@gmail.com',
  //     encryptedPassword: '$2b$10$K15lDGnqoZQWUkMFXVEWpuLaiiSFP5FwjBRWcC5wmBAc3Y/Wp8Vb6',
  //     phoneNumber: '081234567891',
  //     address: 'Tambun Selatan',
  //     role: 'ADMIN',
  //     createdAt: '2023-10-19T03:53:46.069Z',
  //     updatedAt: '2023-10-19T03:53:46.069Z',
  //   }
  //   const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExZjBjNjMzLTI4OWItNGYzMS05ZjY5LTJjNTNiODYzMjcwNSIsImlhdCI6MTY5Nzk4NTUzOX0.gqhJo4u2GNQnQnfkCroVAHHv-nb9p0QCmomdoERprRg';
  //   const req = {
  //     headers: {
  //       authorization: token,
  //     }
  //   }
  //   const res = {};
  //   const next = jest.fn();

  //   authService.authorize(token);
  //   await auth.authorize(req, res, next);

  //   expect(user).toBe(user);
  //   expect(next).toHaveBeenCalledWith();

  // })

  // it("should return list of cars", async () => {
  //   const cars = [{
  //     title: "Car",
  //     content: "Car Content",
  //     category: "Car Category"
  //   }];

  //   const mockRequest = {
  //     query: {
  //       category: "car",
  //     }
  //   };

  //   const mockResponse = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn().mockReturnThis(),
  //   };

  //   carService.listCar.mockReturnValue(cars);
  //   await CarController.getList(mockRequest, mockResponse);

  //   expect(mockResponse.json).toHaveBeenCalledWith({
  //     status: "OK",
  //     message: "Success",
  //     data: cars,
  //   });
  // })

  it('GET /', () => {
    request(app)
      .get('/cars')
      .expect(200)
      .expect('Content-Type', /json/)
  })

})