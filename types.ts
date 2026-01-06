
export interface Model {
  id: string;
  name: string;
  tags: string[];
  rating: number;
}

export interface Advantage {
  title: string;
  items: string[];
  color: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
}
