import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin-inline: auto;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const CategoryLabel = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const AreasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
