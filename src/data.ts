import { type Area } from './types';

export const categories = [
  { id: 0, name: 'Relationships' },
  { id: 1, name: 'Health' },
  { id: 2, name: 'Admin' },
  { id: 3, name: 'Personal' },
];

export const areas: Area[] = [
  { id: 0, category: 0, name: 'Self', status: 'good', priority: 'high' },
  { id: 1, category: 0, name: 'Partner', status: 'good', priority: 'high' },
  { id: 2, category: 0, name: 'Baby', status: 'good', priority: 'high' },
  { id: 3, category: 0, name: 'Dogs', status: 'good', priority: 'high' },
  { id: 4, category: 0, name: 'Family', status: 'good', priority: 'high' },

  { id: 5, category: 1, name: 'Cardio', status: 'good', priority: 'high' },
  { id: 6, category: 1, name: 'Strength', status: 'good', priority: 'high' },

  { id: 7, category: 2, name: 'House', status: 'good', priority: 'high' },
  { id: 8, category: 2, name: 'Food', status: 'good', priority: 'high' },
  { id: 9, category: 2, name: 'Events', status: 'good', priority: 'high' },
  { id: 10, category: 2, name: 'Money', status: 'good', priority: 'high' },
  { id: 11, category: 2, name: 'Time', status: 'good', priority: 'high' },

  { id: 12, category: 3, name: 'Hobbies', status: 'good', priority: 'high' },
  { id: 13, category: 3, name: 'Purpose', status: 'good', priority: 'high' },
];
