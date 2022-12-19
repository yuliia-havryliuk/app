import { MealItemType } from "./../types/mealTypes";

const MealItem = ({
  id,
  mealType,
  products,
  waterAmount,
  vegetarian,
}: MealItemType) => {
  return (
    <div>
      {products.join(', ')}
    </div>
  );
};

export default MealItem;
