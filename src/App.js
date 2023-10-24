import "./App.css";
import Appnavbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Appnavbar /> <h1>This the Home page</h1>
            </>
          }
        />
        <Route
          path="Products"
          element={
            <>
              <Appnavbar />
              <Products />
            </>
          }
        />
        <Route
          path="Cart"
          element={
            <>
              <Appnavbar />
              <Cart />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
