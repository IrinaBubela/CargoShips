import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipsList from "./pages/ShipsList.tsx";
import ShipDetails from "./pages/ShipDetails.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ShipsList />} />
          <Route path="ship/:id" element={<ShipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
