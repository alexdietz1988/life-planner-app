import { type Area } from './types';

import self from './assets/self.png';
import heart from './assets/heart.png';
import babyBottle from './assets/baby-bottle.png';
import pawPrint from './assets/paw-print.png';
import family from './assets/family.png';

import sneakers from './assets/sneakers.png';
import dumbbell from './assets/dumbbell.png';
import house from './assets/house.png';
import avocado from './assets/avocado.png';
import calendar from './assets/calendar.png';
import cash from './assets/cash.png';
import hourglass from './assets/hourglass.png';

import paintbrush from './assets/paintbrush.png';
import mountain from './assets/mountain.png';

export const defaultCategories = [
  { id: 1, name: 'Relationships' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Admin' },
  { id: 4, name: 'Personal' },
];

export const defaultAreas: Area[] = [
  {
    id: 0,
    category: 1,
    name: 'Self',
    status: 'good',
    priority: 'low',
    image: self,
  },
  {
    id: 1,
    category: 1,
    name: 'Partner',
    status: 'good',
    priority: 'low',
    image: heart,
  },
  {
    id: 2,
    category: 1,
    name: 'Baby',
    status: 'good',
    priority: 'low',
    image: babyBottle,
  },
  {
    id: 3,
    category: 1,
    name: 'Dogs',
    status: 'good',
    priority: 'low',
    image: pawPrint,
  },
  {
    id: 4,
    category: 1,
    name: 'Family',
    status: 'good',
    priority: 'low',
    image: family,
  },

  {
    id: 5,
    category: 2,
    name: 'Cardio',
    status: 'good',
    priority: 'low',
    image: sneakers,
  },
  {
    id: 6,
    category: 2,
    name: 'Strength',
    status: 'good',
    priority: 'low',
    image: dumbbell,
  },

  {
    id: 7,
    category: 3,
    name: 'House',
    status: 'good',
    priority: 'low',
    image: house,
  },
  {
    id: 8,
    category: 3,
    name: 'Food',
    status: 'good',
    priority: 'low',
    image: avocado,
  },
  {
    id: 9,
    category: 3,
    name: 'Events',
    status: 'good',
    priority: 'low',
    image: calendar,
  },
  {
    id: 10,
    category: 3,
    name: 'Money',
    status: 'good',
    priority: 'low',
    image: cash,
  },
  {
    id: 11,
    category: 3,
    name: 'Time',
    status: 'good',
    priority: 'low',
    image: hourglass,
  },

  {
    id: 12,
    category: 4,
    name: 'Hobbies',
    status: 'good',
    priority: 'low',
    image: paintbrush,
  },
  {
    id: 13,
    category: 4,
    name: 'Purpose',
    status: 'good',
    priority: 'low',
    image: mountain,
  },
];
