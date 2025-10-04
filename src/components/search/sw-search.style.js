import { css } from 'lit';

export const swSearchStyle = css`
  :host {
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .search-box {
    position: relative;
    display: inline-block;
    width: 60%;
    max-width: 400px;
  }

  input[type='text'] {
    width: 100%;
    padding: 0.6rem 2.5rem 0.6rem 0.8rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    text-align: center;
  }

  button {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
    background: #ffe81f;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    background: #fff176;
  }

  button:disabled {
    background: #555;
    cursor: not-allowed;
  }

  .spinner {
    border: 3px solid #333;
    border-top: 3px solid #ffe81f;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 1s linear infinite;
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes spin {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`;
