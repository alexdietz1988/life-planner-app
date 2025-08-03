import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  border: 1px solid hsl(0, 0%, 80%);
  padding: 0.25rem;
  border-radius: 0.25rem;

  & > span {
    font-size: 0.75rem;
    color: hsl(0, 0%, 40%);
  }

  & > div {
    display: flex;
    column-gap: 0.25rem;
  }
`;

export const FilterButton = styled.button<{ selected?: boolean }>`
  font-size: 1rem;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0.25rem;
  background-color: ${props => (props.selected ? 'hsl(0, 0%, 90%)' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  line-height: 1;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ResetButton = styled.div`
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
