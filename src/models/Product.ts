import type { Ingredient } from "./Ingredient";

export interface Product {
  // uuid?: string; ne e potrebno ako e samo za na FE
  name: string;
  nameTranslated: string;
  price: number;
  description: string;
  productCategory: string;
  listOfIngredients: Ingredient[];
  // listOfOrderProducts: OrderProduct[] ne e potrebno ako e samo za na FE
}
