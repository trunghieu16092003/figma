const API_BASE_URL = "http://localhost:3000";

const callApi = {
  get: async (endpoint, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: getHeaders(token),
    });
    return handleResponse(response);
  },

  getById: async (endpoint, id, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      headers: getHeaders(token),
    });
    return handleResponse(response);
  },

  post: async (endpoint, data, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: getHeaders(token),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  put: async (endpoint, id, data) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  put: async (endpoint, id, data, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: getHeaders(token),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  patch: async (endpoint, id, data, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      method: "PATCH",
      headers: getHeaders(token),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (endpoint, id, token) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: getHeaders(token),
    });
    return handleResponse(response);
  },
};

function getHeaders(token) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// Gắn vào window để dùng global trong HTML
export default callApi;
