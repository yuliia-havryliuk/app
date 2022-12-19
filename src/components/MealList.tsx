import { useParams } from "react-router-dom";
import { mealItemsData, mealItemColumns } from "./../constants/mealData";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const MealList = () => {
  const { tab } = useParams<{ tab: string }>();
  const filteredItems = mealItemsData.filter((item) => item.mealType === tab);

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact columnDefs={mealItemColumns} rowData={filteredItems} />
    </div>
  );
};
export default MealList;
