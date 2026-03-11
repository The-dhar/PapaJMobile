import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/index" element={<Index />} />        // explicit /
</Routes>
  );
}

export default App;