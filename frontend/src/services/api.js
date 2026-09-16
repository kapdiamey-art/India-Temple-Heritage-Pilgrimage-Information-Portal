const API_BASE_URL = 'http://127.0.0.1:8000/api';

/**
 * Fetch all temples from the FastAPI backend.
 * @returns {Promise<Array>} List of temple objects
 */
export async function fetchTemples() {
  try {
    const response = await fetch(`${API_BASE_URL}/temples`);
    if (!response.ok) {
      throw new Error(`Failed to fetch temples: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error in fetchTemples:', error);
    throw error;
  }
}

/**
 * Fetch a single temple by ID from the FastAPI backend.
 * @param {number|string} id Temple ID
 * @returns {Promise<Object>} Temple object
 */
export async function fetchTempleById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/temples/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch temple ID ${id}: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error in fetchTempleById(${id}):`, error);
    throw error;
  }
}
