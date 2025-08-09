import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.dialog`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0, 0%, 0%, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const FormWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormikForm)`
  width: 40rem;
  background-color: white;
  border-radius: 4px;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  input {
    padding: 0.25rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 15rem;
  }
`;

export const ImageField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const Image = styled.img<{ selected?: boolean }>`
  width: 50px;
  height: 50px;

  background-color: ${({ selected }) => (selected ? 'yellow' : 'transparent')};

  &:hover {
    cursor: pointer;
    background-color: ${({ selected }) => !selected && 'hsl(0, 0%, 90%)'};
    border-radius: 0.25rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 0.5rem;

  button {
    display: flex;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;
    }

    &:first-of-type:hover {
      color: red;
    }
    &:last-of-type:hover {
      color: green;
    }
  }
`;
