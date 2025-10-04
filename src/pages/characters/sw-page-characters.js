import { LitElement, html } from 'lit';
import { swapiService } from '../../core/services/swapi.service.js';
import { Router } from '@vaadin/router';

import '../../components/search/sw-search.js';

import { swCharactersStyle } from './sw-page-characters.style.js';

export class SwPageCharacters extends LitElement {
  static properties = {
    people: { type: Array },
    next: { type: String },
    previous: { type: String },
    loading: { type: Boolean },
    error: { type: String },
    currentPage: { type: Number },
    searchQuery: { type: String },
    lastBrowsePage: { type: Number },
  };

  static styles = swCharactersStyle;

  constructor() {
    super();
    this.people = [];
    this.next = null;
    this.previous = null;
    this.loading = false;
    this.error = '';
    this.currentPage = 1;
    this.searchQuery = '';
    this.lastBrowsePage = 1;
  }

  async firstUpdated() {
    this.loadPeople(this.currentPage);
  }

  async loadPeople(page = 1) {
    this.loading = true;
    this.error = '';
    this.people = [];
    try {
      const data = await swapiService.getPeople(page);
      this.people = data.results;
      this.next = data.next;
      this.previous = data.previous;
      this.currentPage = page;
      this.lastBrowsePage = page;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  async searchPeople(query, page = 1) {
    this.loading = true;
    this.error = '';
    this.people = [];
    try {
      const data = await swapiService.searchPeople(query, page);
      this.people = data.results;
      this.next = data.next;
      this.previous = data.previous;
      this.currentPage = page; // página actual de la búsqueda
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  handleSearchEvent(e) {
    const query = e.detail;
    if (!query) return;

    if (!this.searchQuery) this.lastBrowsePage = this.currentPage;
    this.searchQuery = query;
    this.searchPeople(this.searchQuery, 1); // búsqueda arranca en página 1
  }

  handleClearEvent() {
    this.searchQuery = '';
    this.error = '';
    this.loadPeople(this.lastBrowsePage || 1);
  }

  handleNext() {
    if (!this.next || this.loading) return;
    if (this.searchQuery) {
      this.searchPeople(this.searchQuery, this.currentPage + 1);
    } else {
      this.loadPeople(this.currentPage + 1);
    }
  }

  handlePrevious() {
    if (!this.previous || this.loading) return;
    if (this.searchQuery) {
      this.searchPeople(this.searchQuery, this.currentPage - 1);
    } else {
      this.loadPeople(this.currentPage - 1);
    }
  }

  navigateToDetail(url) {
    const match = url.match(/people\/(\d+)\//);
    if (match) {
      const id = match[1];
      Router.go(`/characters/${id}`);
    }
  }

  renderPeople() {
    return html`
      <ul>
        ${this.people.map(
          p => html`
            <li @click=${() => this.navigateToDetail(p.url)}>
              <strong>${p.name}</strong><br />
              <small>${p.gender} - ${p.birth_year}</small>
            </li>
          `
        )}
      </ul>
      <div class="pagination">
        <button ?disabled=${!this.previous || this.loading} @click=${this.handlePrevious}>
          ← Anterior
        </button>
        <button ?disabled=${!this.next || this.loading} @click=${this.handleNext}>
          Siguiente →
        </button>
      </div>
    `;
  }

  render() {
    const showEmpty = !this.loading && !this.error && this.people.length === 0;

    return html`
      <h2>Personajes de Star Wars</h2>

      <sw-search
        .loading=${this.loading}
        placeholder="Buscar personaje..."
        @search=${this.handleSearchEvent}
        @clear=${this.handleClearEvent}
      ></sw-search>

      ${this.error
        ? html`<p class="error">${this.error}</p>`
        : showEmpty
          ? html`<p class="empty-state">No se encontraron personajes.</p>`
          : this.renderPeople()}
    `;
  }
}

customElements.define('sw-page-characters', SwPageCharacters);
