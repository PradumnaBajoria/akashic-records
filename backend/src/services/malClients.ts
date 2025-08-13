import axios from 'axios';

export class MyAnimeListClient {
  // Using ReturnType<typeof axios.create> gives the same typing as AxiosInstance
  private client: ReturnType<typeof axios.create>;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.myanimelist.net/v2',
    });
  }

  async searchAnime(q: string, limit = 5) {
    const res = await this.client.get('/anime', { params: { q, limit } });
    return res.data;
  }

  async getAnimeById(id: number) {
    const res = await this.client.get(`/anime/${id}`);
    return res.data;
  }
}