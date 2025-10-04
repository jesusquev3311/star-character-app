import { LitElement, html } from 'lit';
import { swHeaderStyle } from './sw-header.style';

export class SwHeader extends LitElement {
  static properties = {
    active: { type: String }, // ruta activa, opcional
  };

  static styles = swHeaderStyle;

  navigate(path) {
    window.location.href = path; // navegación SPA (Router intercepta)
  }

  render() {
    return html`
      <header>
        <div class="logo" @click=${() => this.navigate('/')}>⭐ Star Wars</div>

        <nav>
          <a href="/characters" class=${this.active === '/characters' ? 'active' : ''}>
            Personajes
          </a>
        </nav>
      </header>
    `;
  }
}

customElements.define('sw-header', SwHeader);
