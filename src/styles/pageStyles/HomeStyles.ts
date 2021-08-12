import styled from 'styled-components';

export const StyledHome = styled.section`
  height: calc(100vh - var(--nav-height));

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledHeroMessage = styled.div`
  text-align: left;
  width: 35%;

  h1,
  h2,
  h3 {
    font-size: 30px;
  }

  h3 {
    color: var(--pink);
  }

  h4 {
    color: var(--sky-blue);
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledHeroStats = styled.div`
  text-align: left;
  width: 55%;

  .stats-grid {
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, max-content);
  }

  .box {
    text-align: center;
    padding: 15px 10px;
    background-color: var(--dark-blue);

    h4 {
      font-size: 22px;
    }
  }
`;
