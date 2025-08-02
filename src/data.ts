import { type Area } from './types';

export const defaultCategories = [
  { id: 1, name: 'Relationships' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Admin' },
  { id: 4, name: 'Personal' },
];

export const defaultAreas: Area[] = [
  { id: 0, category: 1, name: 'Self', status: 'good', priority: 'low' },
  { id: 1, category: 1, name: 'Partner', status: 'good', priority: 'low' },
  { id: 2, category: 1, name: 'Baby', status: 'good', priority: 'low' },
  { id: 3, category: 1, name: 'Dogs', status: 'good', priority: 'low' },
  { id: 4, category: 1, name: 'Family', status: 'good', priority: 'low' },

  { id: 5, category: 2, name: 'Cardio', status: 'good', priority: 'low' },
  { id: 6, category: 2, name: 'Strength', status: 'good', priority: 'low' },

  { id: 7, category: 3, name: 'House', status: 'good', priority: 'low' },
  { id: 8, category: 3, name: 'Food', status: 'good', priority: 'low' },
  { id: 9, category: 3, name: 'Events', status: 'good', priority: 'low' },
  { id: 10, category: 3, name: 'Money', status: 'good', priority: 'low' },
  { id: 11, category: 3, name: 'Time', status: 'good', priority: 'low' },

  { id: 12, category: 4, name: 'Hobbies', status: 'good', priority: 'low' },
  { id: 13, category: 4, name: 'Purpose', status: 'good', priority: 'low' },
];
