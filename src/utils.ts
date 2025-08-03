import { type Status, type Priority } from './types';

export const statusOptions: Status[] = ['good', 'neutral', 'bad'] as const;
export const priorityOptions: Priority[] = ['low', 'medium', 'high'] as const;

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
