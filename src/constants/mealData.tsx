import { MealItemType } from "./../types/mealTypes";
export const mealTitleListData: string[] = ["breakfast", "lunch", "dinner"];

export const mealItemColumns = [
  { field: "id" },
  { field: "mealType" },
  { field: "products" },
  { field: "waterAmount" },
  { field: "vegetarian" },
];
export const mealItemsData: MealItemType[] = [
  {
    id: 1,
    mealType: "breakfast",
    products: ["milk", "egg", "sugar"],
    waterAmount: 500,
    vegetarian: true,
  },
  {
    id: 2,
    mealType: "lunch",
    products: ["soup", "cabbage", "bread"],
    waterAmount: 1500,
    vegetarian: false,
  },
  {
    id: 3,
    mealType: "dinner",
    products: ["salad", "bread", "avocado"],
    waterAmount: 0,
    vegetarian: true,
  },
  {
    id: 4,
    mealType: "dinner",
    products: ["milk", "celler", "tomato"],
    waterAmount: 500,
    vegetarian: false,
  },
];
