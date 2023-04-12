import { API_BASE_URL, API_KEY } from '@/utils';

export default async function handler(req, res) {
  const { movieId } = req.query;
  try {
    const [response, response2] = await Promise.all([
      fetch(`${API_BASE_URL}movie/${movieId}?api_key=${API_KEY}`),
      fetch(`${API_BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`),
    ]);
    const data = await response.json();
    const data2 = await response2.json();

    res.status(200).json({
      details: data,
      credits: data2,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
