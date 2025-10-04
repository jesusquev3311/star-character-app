import { BASE_URL } from '../../shared/config';

class SwapiService {
  async getPeople(page = 1) {
    try {
      const response = await fetch(`${BASE_URL}/?page=${page}`);
      if (!response.ok) {
        throw new Error(`Error getting characters (status: ${response.status})`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPeople error:', error);
      throw new Error('Error getting the characters list.');
    }
  }

  async getPerson(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}/`);
      if (!response.ok) {
        throw new Error(`Error getting character ID: ${id} (status: ${response.status})`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPerson error:', error);
      throw new Error('Error getting the character info.');
    }
  }

  async searchPeople(query, page = 1) {
    try {
      const url = `${BASE_URL}/?search=${encodeURIComponent(query)}&page=${page}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error on search (status: ${response.status})`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ SWAPI getPerson error:', error);
      throw new Error('Error getting the search result');
    }
  }
}

export const swapiService = new SwapiService();
