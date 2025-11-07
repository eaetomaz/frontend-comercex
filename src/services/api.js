const API_URL = 'http://localhost:3001/api';

export async function apiFetch(endpoint, options = {}) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6Ikd1aWxoZXJtZSIsImlhdCI6MTc1NTIxMDUzMX0.QtJ9OVPN_Af6GNnOgwamxI4NQ5TAVk8Mpyrq1MpiCIg';  

  const headers = {
    'Content-Type': 'application/json',    
    'Authorization': `Bearer ${token}`   
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
  });  

  console.log('Requisição:', {
  url: `${API_URL}${endpoint}`,
  method: options.method || 'GET'
});

  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  }

  return response.json();  
}
