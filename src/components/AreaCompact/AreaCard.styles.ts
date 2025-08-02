import styled from 'styled-components';

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
