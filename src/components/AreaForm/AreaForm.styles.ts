import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  max-width: 600px;
  padding: 2rem;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 2.5rem;
  margin-block-end: 5rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: 0.9rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  label {
    display: flex;
    gap: 0.25rem;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const Button = styled.button<{ background?: string }>`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background-color: hsl(120, 100%, 30%);
  color: white;
`;

export const SmallButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.75rem;

  button {
    background-color: hsl(0, 0%, 90%);
    border-radius: 4px;
    padding: 0.25rem 0.5rem;

    &:last-of-type {
      background-color: hsl(0, 100%, 40%);
      color: white;
    }
  }
`;
