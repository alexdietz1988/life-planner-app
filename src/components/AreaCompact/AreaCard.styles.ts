import styled from 'styled-components';

export const Area = styled.div`
  position: relative;
  padding: 0.75rem 0.5rem;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  min-width: 5rem;

  & > * {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  opacity: 0.5;
  top: 0.25rem;
  right: 0.25rem;

  &:hover {
    color: red;
  }
`;
