import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoreConcepts from "./pages/CoreConcepts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/core" element={<CoreConcepts />} />
      </Routes>
    </Router>
  );
}
export default App;
