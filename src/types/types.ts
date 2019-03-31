export interface ICuisine {
  alias: string;
  title: string;
  parents: string;
  country_whitelist: string[];
  country_blacklist: string[];
}
