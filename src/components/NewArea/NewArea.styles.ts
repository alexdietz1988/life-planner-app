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

export const Form = styled(FormikForm)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 7.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.25rem;

  input {
    padding: 0.25rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    max-width: 100%;
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
