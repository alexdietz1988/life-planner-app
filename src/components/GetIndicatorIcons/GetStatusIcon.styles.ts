import styled from 'styled-components';

export const Icon = styled.div<{ status: 'good' | 'bad' | 'neutral' }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === 'good') return 'green';
    if (props.status === 'bad') return 'red';
    if (props.status === 'neutral') return 'hsl(50, 100%, 50%)';
  }};
`;

export const GoodIcon = styled(Icon)`
  background-color: green;
`;
