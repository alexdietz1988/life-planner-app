import styled, { css } from 'styled-components';

export const Area = styled.div`
  position: relative;
  padding: 0.75rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  min-width: 5rem;

  &:hover {
    border-color: hsl(0, 0%, 80%);
    cursor: default;
    button:first-of-type {
      opacity: 1;
    }
  }
`;

export const AreaLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'alwaysShow',
})<{ alwaysShow?: boolean }>`
  ${(props) =>
    props.alwaysShow
      ? css``
      : css`
          display: none;
        `}
`;

export const AreaImage = styled.img`
  width: 3rem;
`;

export const Indicators = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & > button {
    display: flex;
    font-size: 1rem;

    &:hover {
      opacity: 0.75;
      cursor: pointer;
    }
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  opacity: 0;
  top: 0.25rem;
  right: 0.25rem;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
