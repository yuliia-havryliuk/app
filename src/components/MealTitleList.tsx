import { Link } from "react-router-dom";
import MealTitle from "./MealTitle";
import { mealTitleListData } from "../constants/mealData";

const MealTitleList = () => {
  return (
    <div>
      {mealTitleListData.map((item) => {
        return (
          <Link to={`/${item}`}>
            <MealTitle title={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default MealTitleList;
