import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin-inline: auto;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const Category = styled.div`
  border: 1px solid #ccc;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  row-gap: 0.5rem;

  &:hover {
    & > div > button {
      opacity: 1;
    }
  }
`;

export const CategoryLabel = styled.div`
  text-align: center;
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
