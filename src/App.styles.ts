import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin-inline: auto;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    & > div > button {
      opacity: 1;
    }
  }
`;

export const CategoryLabel = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const AreasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const AddAreaButton = styled.button`
  opacity: 0;
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
