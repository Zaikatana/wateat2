export interface ICuisine {
  alias: string;
  title: string;
  parents: string;
  country_whitelist: string[];
  country_blacklist: string[];
}

export interface IBusiness {
  alias: string;
  categories: any[];
  coordinates: any;
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: any;
  name: string;
  phone: string;
  rating: number;
  review_count: number;
  transactions: any[];
  url: string;
}