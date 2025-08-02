import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 7.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 0.5rem;

  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    padding: 0.25rem;

    &:hover {
      background-color: gray;
      cursor: pointer;
    }
  }
`;
