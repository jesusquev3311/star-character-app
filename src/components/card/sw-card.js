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
        <p><strong>Altura:</strong> ${c.height} cm</p>
        <p><strong>Peso:</strong> ${c.mass} kg</p>
        <p><strong>Género:</strong> ${c.gender}</p>
        <p><strong>Año de nacimiento:</strong> ${c.birth_year}</p>
        <p><strong>Color de ojos:</strong> ${c.eye_color}</p>
        <p><strong>Color de piel:</strong> ${c.skin_color}</p>

        <a href="/characters">← Volver</a>
      </div>
    `;
  }
}

customElements.define('sw-card', SwCard);
