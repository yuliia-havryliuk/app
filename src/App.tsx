import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MealTitleList from "./components/MealTitleList";
import MealList from "./components/MealList";



const App = () => {
  return (
    <div>      
      <BrowserRouter>
      <div>
        <MealTitleList />
      </div>
        <Routes>          
          <Route path="/">
            <Route index element={<MealList />} />
            <Route path=":tab" element={<MealList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
