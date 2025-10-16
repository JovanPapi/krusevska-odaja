import { Ingredient } from "./Ingredient";

export class Product {
  uuid?: string;
  name: string = "";
  nameTranslated: string = "";
  price: number = 0;
  productCategory: string = "";
  description: string = "";
  listOfIngredients: Ingredient[] = [];
}
