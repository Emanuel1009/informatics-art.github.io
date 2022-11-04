import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pendaftaran from "./pages/Pendaftaran";
import Techno1 from "./pages/Technopreneurship/Techno1";
import Test from "./pages/Technopreneurship/Technopreneurship";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pendaftaran" element={<Pendaftaran />} />
      <Route path="/techno" element={<Test />} />
      <Route path="/techno1" element={<Techno1 />} />
    </Routes>
  );
}

export default App;
