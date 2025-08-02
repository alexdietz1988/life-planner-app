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

export const Area = styled.div`
  padding: 0.5rem;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  min-width: 5rem;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  & > * {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;
