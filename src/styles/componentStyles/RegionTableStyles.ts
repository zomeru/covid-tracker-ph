import styled from 'styled-components';

export const StyledRegionTable = styled.table`
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;

  thead {
    color: var(--pink);
  }

  td,
  th {
    padding: 8px 20px;
    background-color: var(--dark-blue);
  }
`;
