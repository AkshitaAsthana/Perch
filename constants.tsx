
import { MenuCategory, MenuItem, GalleryItem } from './types';

export const RESTAURANT_INFO = {
  name: 'Perch LA',
  tagline: 'Elevated French-inspired rooftop bistro with panoramic DTLA views.',
  address: '448 S. Hill Street, Los Angeles, CA 90013',
  phone: '(213) 802-1770',
  email: 'info@perchla.com',
  reservationPolicy: 'Reservations are highly recommended. Please check-in at the 15th Floor Host Stand. Groups of 6 or more are subject to automatic gratuity.',
  hours: {
    lunch: 'Fri: 11:30 AM – 3:00 PM',
    brunch: 'Sat & Sun: 10:00 AM – 3:30 PM',
    dinner: 'Sun – Thu: 5:00 PM – 10:00 PM | Fri & Sat: 5:00 PM – 11:00 PM',
    happyHour: 'Mon – Fri: 4:00 PM – 6:00 PM'
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Dinner
  { id: 'd1', name: 'Ahi Tuna Tartare', description: 'Avocado, cucumber, sesame soy vinaigrette, wonton chips', price: '21', category: MenuCategory.DINNER },
  { id: 'd2', name: 'Filet Mignon', description: '8oz, herb butter, potato puree, seasonal vegetables', price: '54', category: MenuCategory.DINNER },
  { id: 'd3', name: 'Pan Seared Salmon', description: 'Lentils, roasted roots, lemon beurre blanc', price: '38', category: MenuCategory.DINNER },
  { id: 'd4', name: 'Steak Frites', description: 'Truffle herb butter, skinny fries, arugula salad', price: '42', category: MenuCategory.DINNER },
  
  // Lunch
  { id: 'l1', name: 'Perch Burger', description: 'Brioche bun, gruyere, caramelized onions, aioli', price: '22', category: MenuCategory.LUNCH },
  { id: 'l2', name: 'Quiche Du Jour', description: 'Chef’s daily selection, baby greens', price: '18', category: MenuCategory.LUNCH },
  
  // Brunch
  { id: 'b1', name: 'French Toast', description: 'Brioche, berry compote, chantilly cream', price: '19', category: MenuCategory.BRUNCH },
  { id: 'b2', name: 'Eggs Benedict', description: 'Poached eggs, ham, hollandaise, English muffin', price: '21', category: MenuCategory.BRUNCH },
  
  // Cocktails
  { id: 'c1', name: 'The Perch Sour', description: 'Whiskey, lemon, simple syrup, red wine float', price: '18', category: MenuCategory.COCKTAILS },
  { id: 'c2', name: 'Penicillin', description: 'Scotch, ginger, honey, lemon', price: '19', category: MenuCategory.COCKTAILS }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=2070&auto=format&fit=crop', caption: 'Panoramic views of Pershing Square', category: 'view' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop', caption: 'The Rooftop Garden Lounge', category: 'exterior' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1550966841-3ee32338ff40?q=80&w=2071&auto=format&fit=crop', caption: 'Elegant French Bistro Dining', category: 'interior' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', caption: 'Signature Cocktails', category: 'food' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1542736667-069246bdf6d7?q=80&w=2070&auto=format&fit=crop', caption: 'Nighttime Skyline', category: 'view' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop', caption: 'Ahi Tuna Tartare', category: 'food' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop', caption: 'VIP Rooftop Seating', category: 'exterior' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1470252649358-96940c9350d9?q=80&w=2070&auto=format&fit=crop', caption: 'DTLA Sunset Views', category: 'view' }
];
