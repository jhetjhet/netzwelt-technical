import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import AuthenticationProvider from "./components/AuthenticationProvider";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthenticationProvider>
            <Outlet />
          </AuthenticationProvider>
        }>
          <Route element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } path="/" />
          <Route element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } path="/home/index/" />
          <Route element={<LoginPage />} path="/login/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
