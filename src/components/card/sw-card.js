import { LitElement, html } from 'lit';
import { swCardStyle } from './sw-card.style';

export class SwCard extends LitElement {
  static properties = {
    character: { type: Object },
  };

  static styles = swCardStyle;

  render() {
    const c = this.character || {};
    return html`
      <div class="card">
        <h2>${c.name}</h2>
        <p><strong>Birth year:</strong> ${c.birth_year}</p>
        <p><strong>Gender:</strong> ${c.gender}</p>

        <a href="/characters">← Go Back</a>
      </div>
    `;
  }
}

customElements.define('sw-card', SwCard);
