import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Configuration from "./pages/configuration/Configuration";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/singleUser/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./formsource";
import "./App.scss";
import "./style/dark.scss";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const color = useSelector((state: any) => state.colorMode);

  return (
    <div className={color === "white" ? "app" : "app dark"}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/*" element={<Navigate to="/analytics" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
