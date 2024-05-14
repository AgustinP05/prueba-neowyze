const API_URL = 'https://swapi.dev/api/people/'

export const fetchChar = async (page = 1) => {
  const response = await fetch(`${API_URL}?page=${page}`)
  const data = await response.json()
  return data
}
