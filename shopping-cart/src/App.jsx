import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NaVBar from "./components/NaVBar";
import CartContextProvider from "./Context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NaVBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
