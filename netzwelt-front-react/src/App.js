import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<HomePage />} path="/home/index/" />
        <Route element={<LoginPage />} path="/login/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
