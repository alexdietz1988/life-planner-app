import { type Area } from './types';

export const defaultCategories = [
  { id: 1, name: 'Relationships' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Admin' },
  { id: 4, name: 'Personal' },
];

export const defaultAreas: Area[] = [
  { id: 0, category: 1, name: 'Self', status: 'good', priority: 'high' },
  { id: 1, category: 1, name: 'Partner', status: 'good', priority: 'high' },
  { id: 2, category: 1, name: 'Baby', status: 'good', priority: 'high' },
  { id: 3, category: 1, name: 'Dogs', status: 'good', priority: 'high' },
  { id: 4, category: 1, name: 'Family', status: 'good', priority: 'high' },

  { id: 5, category: 2, name: 'Cardio', status: 'good', priority: 'high' },
  { id: 6, category: 2, name: 'Strength', status: 'good', priority: 'high' },

  { id: 7, category: 3, name: 'House', status: 'good', priority: 'high' },
  { id: 8, category: 3, name: 'Food', status: 'good', priority: 'high' },
  { id: 9, category: 3, name: 'Events', status: 'good', priority: 'high' },
  { id: 10, category: 3, name: 'Money', status: 'good', priority: 'high' },
  { id: 11, category: 3, name: 'Time', status: 'good', priority: 'high' },

  { id: 12, category: 4, name: 'Hobbies', status: 'good', priority: 'high' },
  { id: 13, category: 4, name: 'Purpose', status: 'good', priority: 'high' },
];
