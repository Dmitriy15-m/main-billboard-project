export interface IItemCard {
  img: string;
  title: string;
  price: string;
  location: string;
  visitTime: string;
}

export interface IItemsList {
  'main-page': IItemCard[];
}
