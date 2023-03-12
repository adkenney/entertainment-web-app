import { API_KEY, API_BASE_URL } from '@/utils';

async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await fetch(
      `${API_BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json({
      results: data.results,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default handler;
