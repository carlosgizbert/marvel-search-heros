import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px inherit inset;
    box-shadow: 0 0 0 1000px inherit inset;
    transition: background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s;
    color: ${({ theme }) => theme.colors.text10};
    background-color: ${({ theme }) => theme.colors.background10};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text10}; /* Fixes text color in Chrome */
  }

  h1 {
    font-size: 1.5rem;
  }

  .one-line-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
    overflow: hidden;
    text-overflow: ellipsis;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background10};
    color: ${({ theme }) => theme.colors.text10};
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

export { GlobalCSS };