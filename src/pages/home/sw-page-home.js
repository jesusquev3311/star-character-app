import { LitElement, html } from 'lit';
import { initRouter } from '../../core/router/app-router.js';

import '../../layouts/header/sw-header.js';
import '../../../src/pages/characters/sw-page-characters';

export class MyElement extends LitElement {
  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');
    initRouter(outlet);
  }

  render() {
    return html`
      <sw-header></sw-header>
      <main id="outlet"></main>
    `;
  }
}

customElements.define('my-element', MyElement);
