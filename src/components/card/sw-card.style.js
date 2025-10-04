import { css } from 'lit';

export const swCardStyle = css`
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
