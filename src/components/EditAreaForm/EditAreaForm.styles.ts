import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  width: fit-content;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > * {
    flex: 1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.25rem;

  button {
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.25rem;
    line-height: 1;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: black;
    }
  }
`;

export const CloseButton = styled.button`
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
