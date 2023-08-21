import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import AuthenticationProvider from "./components/AuthenticationProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthenticationProvider>
            <Outlet />
          </AuthenticationProvider>
        }>
          <Route element={<HomePage />} path="/" />
          <Route element={<HomePage />} path="/home/index/" />
          <Route element={<LoginPage />} path="/login/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
