import { API_BASE_URL, API_KEY } from '@/utils';

export default async function handler(req, res) {
  const { query } = req.query;
  try {
    const response = await fetch(
      `${API_BASE_URL}search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&page=1`
    );
    const data = await response.json();
    res.status(200).json({
      results: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
