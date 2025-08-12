export type Status = 'good' | 'bad' | 'neutral';
export type Priority = 'high' | 'medium' | 'low';

export interface Category {
  id: number;
  name: string;
}

export interface Area {
  id: number;
  category: number;
  name: string;
  status: Status;
  priority: Priority;
  image?: string;
  pinned?: boolean;
}

export interface Image {
  name: string;
  src: string;
}
