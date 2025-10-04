import { css } from 'lit';

export const swCharacterDetailStyle = css`
  :host {
    display: block;
    padding: 2rem;
    color: #fff;
    background: #000;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
  }

  h2 {
    color: #ffe81f;
    text-align: center;
    margin-bottom: 1rem;
  }

  .card {
    background: #111;
    border: 1px solid #333;
    border-radius: 8px;
    max-width: 400px;
    margin: 0 auto;
    padding: 1.5rem;
    text-align: center;
  }

  .error {
    color: red;
    text-align: center;
  }

  a {
    display: inline-block;
    margin-top: 1.5rem;
    color: #ffe81f;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
