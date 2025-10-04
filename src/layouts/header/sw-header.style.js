import { css } from 'lit';

export const swHeaderStyle = css`
  :host {
    display: block;
    background: #0a0a0a;
    border-bottom: 2px solid #ffe81f;
    box-shadow: 0 2px 10px rgba(255, 232, 31, 0.1);
    font-family: 'Arial Black', sans-serif;
    letter-spacing: 1px;
    z-index: 1000;
    position: sticky;
    top: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    color: #ffe81f;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    text-shadow: 0 0 5px #ffe81f;
    transition: 0.3s;
  }

  .logo:hover {
    text-shadow:
      0 0 15px #ffe81f,
      0 0 25px #ffe81f;
  }

  nav {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: #ffe81f;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    transition: 0.3s;
  }

  a:hover {
    color: #fff176;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #ffe81f;
    transition: width 0.3s ease-in-out;
  }

  a:hover::after,
  a.active::after {
    width: 100%;
  }

  @media (max-width: 600px) {
    header {
      flex-direction: column;
      text-align: center;
    }
    nav {
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: 0.5rem;
    }
  }
`;
