import { API_BASE_URL, API_KEY } from '@/utils';

export default async function handler(req, res) {
  const { tvId } = req.query;
  try {
    const response = await fetch(
      `${API_BASE_URL}tv/${tvId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json({
      details: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
