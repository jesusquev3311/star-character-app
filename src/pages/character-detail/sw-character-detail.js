import { LitElement, html } from 'lit';
import { swapiService } from '../../core/services/swapi.service.js';
import { swCharacterDetailStyle } from './sw-character-detail.style.js';

import '../../components/card/sw-card.js';

export class SwCharacterDetail extends LitElement {
  static properties = {
    params: { type: Object },
    character: { type: Object },
    loading: { type: Boolean },
    error: { type: String },
  };

  static styles = [swCharacterDetailStyle];

  constructor() {
    super();
    this.character = null;
    this.loading = true;
    this.error = '';
  }

  async onBeforeEnter(location) {
    const id = location.params.id;
    await this.loadCharacter(id);
  }

  async loadCharacter(id) {
    this.loading = true;
    this.error = '';
    this.character = null;

    try {
      const data = await swapiService.getPerson(id);
      this.character = data;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return html`<p>Loading character...</p>`;
    }

    if (this.error) {
      return html`<p class="error">${this.error}</p>
        <a href="/characters">← Go back</a>`;
    }

    return html`<sw-card .character=${this.character}></sw-card>`;
  }
}

customElements.define('sw-character-detail', SwCharacterDetail);
