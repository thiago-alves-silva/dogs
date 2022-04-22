import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import UserStorage from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
