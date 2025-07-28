import { type Status } from './types';

export const getStatusLabel = (status: Status) => {
  switch (status) {
    case 'good':
      return '🟢';
    case 'bad':
      return '🔴';
    case 'neutral':
      return '🟡';
  }
};
