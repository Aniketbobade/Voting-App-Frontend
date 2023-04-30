import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDetails from "./pages/AdminDetails";
import Navbar from "./components/Navbar";
import AdminRegistration from "./pages/AdminRegistration";
import VoterRegistration from "./pages/VoterRegistration";
import VoterLogin from "./pages/VoterLogin";
import VoterDetails from "./pages/VoterDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/voterLogin" element={<VoterLogin />}></Route>
        <Route
          path="/adminRegistration"
          element={<AdminRegistration />}
        ></Route>
        <Route
          path="/voterRegistration"
          element={<VoterRegistration />}
        ></Route>
        <Route path="/adminDetails" element={<AdminDetails />}></Route>
        <Route path="/voterDetails" element={<VoterDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
