import { type Status, type Priority } from './types';

export const statusOptions: Status[] = ['good', 'bad', 'neutral'] as const;
export const priorityOptions: Priority[] = ['high', 'medium', 'low'] as const;

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

export const defaultFilters = { status: 'all', priority: 'all' };
