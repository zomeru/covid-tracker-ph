import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  //? CSS VARIABLES
  :root {

    //? FONTS
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    //? COLORS
    --white: #FEFEFE;
    --gray: #b5b9b8;
    --navy-blue: #222B45;
    --dark-blue: rgb(15, 23, 49);
    --sky-blue: #6EADF0;
    --blue: #0069E9;
    --red: #F6093B;
    --pink: #F66382;
    --green: #00A22B;
    --green-light: #78C48B;

    //? OTHER VARIABLES
    --transition: all 0.25s ease-in-out;
    --max-width: 1400px;
    --rl-space: 50px;
    --nav-height: 100px;
  }

  //? GLOBAL STYLES
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  //? SCROLL BAR STYLES
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pink);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--navy-blue);
    color: var(--white);
    text-align: center;
    max-width: var(--max-width);
  }

   p {
    color: var(--gray);
  }

  section {
    padding: 0 var(--rl-space);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--white);
    transition: var(--transition);

    :hover {
      color: var(--pink)
    }
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--red);
      transition: var(--transition);
    }
  }
`;
