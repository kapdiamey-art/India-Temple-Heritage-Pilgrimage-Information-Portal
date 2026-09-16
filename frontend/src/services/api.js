const PROD_API_URL = 'https://india-temple-heritage-pilgrimage-v5we.onrender.com/api';
const LOCAL_API_URL = 'http://127.0.0.1:8000/api';

const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const PRIMARY_API_URL = import.meta.env.VITE_API_BASE_URL || (isLocalhost ? LOCAL_API_URL : PROD_API_URL);
const FALLBACK_API_URL = isLocalhost ? PROD_API_URL : LOCAL_API_URL;

/**
 * Helper to fetch data with primary and secondary fallback endpoints.
 */
async function fetchWithFallback(endpointPath) {
  try {
    const primaryRes = await fetch(`${PRIMARY_API_URL}${endpointPath}`);
    if (primaryRes.ok) {
      return await primaryRes.json();
    }
  } catch (err) {
    console.warn(`Primary API endpoint (${PRIMARY_API_URL}${endpointPath}) failed. Trying fallback...`, err);
  }

  // Try fallback URL if primary failed or returned non-200
  try {
    const fallbackRes = await fetch(`${FALLBACK_API_URL}${endpointPath}`);
    if (fallbackRes.ok) {
      return await fallbackRes.json();
    }
    throw new Error(`Fallback API error: ${fallbackRes.status} ${fallbackRes.statusText}`);
  } catch (fallbackErr) {
    console.error(`Both primary and fallback API endpoints failed for ${endpointPath}:`, fallbackErr);
    throw fallbackErr;
  }
}

/**
 * Fetch all temples from the FastAPI backend.
 * @returns {Promise<Array>} List of temple objects
 */
export async function fetchTemples() {
  return await fetchWithFallback('/temples');
}

/**
 * Fetch a single temple by ID from the FastAPI backend.
 * @param {number|string} id Temple ID
 * @returns {Promise<Object>} Temple object
 */
export async function fetchTempleById(id) {
  return await fetchWithFallback(`/temples/${id}`);
}
