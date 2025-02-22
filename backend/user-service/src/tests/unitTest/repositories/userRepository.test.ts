import request from "supertest"
import app from "../../../app"

describe('rote test', () => {
  it('should show User Service is running!...', async() => {
    const response = await request(app).get('/users/test');
    expect(response.status).toBe(200);
    //expect(response).toBe(200);

  });
});
    