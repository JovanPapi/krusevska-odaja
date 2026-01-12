/**
 * Define the object with "as const" to lock its values
 * ENUM type is not permitted anymore because of "erasableSyntaxOnly"
 */
export const ProductCategory = {
  SALADS: "SALADS",
  GARNISH_AND_EXTRA: "GARNISH_AND_EXTRA",
  APPETIZERS: "APPETIZERS",
  GRILL: "GRILL",
  DISHES_TO_ORDER: "DISHES_TO_ORDER",
  SPECIALITIES: "SPECIALITIES",
  COOKED_DISHES: "COOKED_DISHES",
  DESSERTS: "DESSERTS",
  SNACKS: "SNACKS",
  APERATIVES: "APERATIVES",
  DRINKS: "DRINKS",
} as const;

// 2. Define a type that represents the values of the object
export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory];
