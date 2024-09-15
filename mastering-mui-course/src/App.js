import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoreConcepts from "./pages/CoreConcepts";
import FiveStepsStyling from "./pages/FiveStepsStyling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/core" element={<CoreConcepts />} />
        <Route path="/five" element={<FiveStepsStyling />} />
      </Routes>
    </Router>
  );
}
export default App;
