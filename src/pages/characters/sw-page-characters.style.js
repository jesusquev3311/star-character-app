import { css } from 'lit';

export const swCharactersStyle = css`
  :host {
    display: block;
    color: #fff;
    background: #000;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
    margin: 0;
    padding: 40px 20px;
  }

  h2 {
    color: #ffe81f;
    text-align: center;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  li {
    background: #111;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.03);
    border-color: #ffe81f;
    background: #222;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  button {
    background: #ffe81f;
    border: none;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #fff176;
  }

  button:disabled {
    background: #444;
    color: #999;
    cursor: not-allowed;
  }

  .error {
    color: red;
    text-align: center;
  }
`;
