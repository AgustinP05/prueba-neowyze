const API_URL = 'https://swapi.dev/api/people/'

// Funcion para verificar si el personaje hace match con el filtro
const matchFilters = (character, filters) => {
  const { eyeColor, gender } = filters
  if (eyeColor && character.eye_color !== eyeColor) { return false }
  if (gender && character.gender !== gender) { return false }
  return true
}

export const fetchChar = async (page = 1, filters = {}) => {
  const hasFilter = filters.eyeColor || filters.gender // si se ha aplicado algun filtro, es true

  if (!hasFilter) { // Si no se ha aplicado algun filtro...
    const response = await fetch(`${API_URL}?page=${page}`)
    const data = await response.json()
    return data
  }

  const allChars = [] // Aquí pondré todos los personajes para luego filtrarlos
  let currentPage = 1 // Numero de pagina inicial por defecto
  let totalPages = 1 // Luego se calculará la cantidad de paginas dependiendo la cantidad de personajes

  while (currentPage <= totalPages) { // Este while es importantisimo porque al haber algun filtro aplicado, le hace fetch a todas las paginas 'people?page=${page} de la api. Agarra todos sus personajes y los junta en un solo array
    const response = await fetch(`${API_URL}?page=${currentPage}`) // Peticion de la pagina actual para obtener los 10 personajes
    const data = await response.json()

    allChars.push(...data.results)// metemos toda la lista de personajes de la pagina actual al allChars

    totalPages = Math.ceil(data.count / 10) // Determinamos la cantidad total de paginas dependiendo de la cantidad total de personajes que haya en swapi. Ahora mismo hay 82. El ceil redondea la division que se hace cada 10 que es el numero que quiero por pagina
    currentPage++
  }

  // Filtro de personajes
  const filteredChars = allChars.filter((char) => {
    return matchFilters(char, filters)
  })

  return { results: filteredChars } // En lugar de devolver los 10 personajes por pagina como hace normalmente la API, aquí metimos dentro de results los personajes que han pasado el filtro
}
