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
    background-color: hsl(0, 0%, 95%);
    cursor: default;
    & > button {
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
  width: 4.15rem;
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

export const Pin = styled.button<{ pinned?: boolean }>`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  opacity: ${(props) => (props.pinned ? 1 : 0)};

  & > * {
    &:hover {
      cursor: pointer;
      color: gray;
    }
    &:active {
      color: black;
    }
  }
`;
