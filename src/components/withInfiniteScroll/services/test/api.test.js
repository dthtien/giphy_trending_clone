import { getTrending } from '../api';

describe('API', () => {
  it('Should get response', async () => {
    const response = await getTrending();
    expect(response).toBeDefined();
    expect(response).toEqual({});
  });
});
