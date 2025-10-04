import { LitElement, html } from 'lit';
import { swSearchStyle } from './sw-search.style';

export class SwSearch extends LitElement {
  static properties = {
    placeholder: { type: String },
    value: { type: String },
    loading: { type: Boolean },
  };

  static styles = swSearchStyle;

  constructor() {
    super();
    this.placeholder = 'Buscar personaje...';
    this.value = '';
    this.loading = false;
  }

  handleInput(e) {
    this.value = e.target.value;
    // Si el input queda vacío, avisamos al padre para que resetee el listado
    if (this.value.trim() === '') {
      this.dispatchEvent(new CustomEvent('clear', { bubbles: true, composed: true }));
    }
  }

  handleSearch() {
    const q = this.value.trim();
    this.dispatchEvent(
      new CustomEvent('search', {
        detail: q,
        bubbles: true,
        composed: true,
      })
    );
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') this.handleSearch();
    if (e.key === 'Escape') this.handleClear();
  }

  handleClear() {
    this.value = '';
    this.dispatchEvent(new CustomEvent('clear', { bubbles: true, composed: true }));
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('input')?.focus();
    });
  }

  render() {
    const hasText = this.value.trim().length > 1;

    return html`
      <div class="search-box">
        ${hasText
          ? html`<button class="clear-btn" title="Limpiar" @click=${this.handleClear}>×</button>`
          : null}

        <input
          type="text"
          .value=${this.value}
          placeholder=${this.placeholder}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${this.loading
          ? html`<div class="spinner"></div>`
          : html`
              <button class="search-btn" @click=${this.handleSearch} ?disabled=${!hasText}>
                Buscar
              </button>
            `}
      </div>
    `;
  }
}

customElements.define('sw-search', SwSearch);
