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
  align-items: stretch;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: hsl(0, 0%, 95%);
`;

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.5rem;
  min-width: 10rem;
`;

export const CategoryLabel = styled(Card)`
  font-weight: bold;
  font-size: 1.25rem;
  border: none;
  display: flex;
  align-items: center;
  word-break: break-all;
`;

export const AreasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Area = styled(Card)`
  display: flex;
  gap: 0.25rem;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  & > * {
    display: flex;
    align-items: center;
  }
`;
