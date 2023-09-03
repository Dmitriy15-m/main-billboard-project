export interface IItemCard {
  img: string;
  title: string;
  price: number;
  location: string;
  visitTime: string;
}

export interface IItemsList {
  'main-page': IItemCard[];
}
