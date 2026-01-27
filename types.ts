
export enum MenuCategory {
  LUNCH = 'Lunch',
  BRUNCH = 'Brunch',
  DINNER = 'Dinner',
  HAPPY_HOUR = 'Happy Hour',
  COCKTAILS = 'Cocktails'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  tags?: string[];
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'interior' | 'exterior' | 'food' | 'view';
}
