import { BASE_URL } from '../../shared/config';

class SwapiService {
  async getPeople(page = 1) {
    try {
      const response = await fetch(`${BASE_URL}/?page=${page}`);
      if (!response.ok) {
        throw new Error(`Error al obtener personajes (status: ${response.status})`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPeople error:', error);
      throw new Error('No se pudo obtener la lista de personajes.');
    }
  }

  async getPerson(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}/`);
      if (!response.ok) {
        throw new Error(`Error al obtener personaje con ID ${id} (status: ${response.status})`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPerson error:', error);
      throw new Error('No se pudo obtener la información del personaje.');
    }
  }

  async searchPeople(query, page = 1) {
    try {
      const url = `${BASE_URL}/?search=${encodeURIComponent(query)}&page=${page}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al hacer la busqueda (status: ${response.status})`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPerson error:', error);
      throw new Error('No se pudo obtener la información de busqueda');
    }
  }
}

// Exportar una sola instancia (patrón singleton)
export const swapiService = new SwapiService();
