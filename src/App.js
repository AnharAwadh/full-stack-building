import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Profile from "./pages/ProfilePage";
import ServiceProfile from "./pages/ServiceProfile ";
import ServicePage from "./pages/ServicePage";
import Footer from "./componets/Footer";
import DetailsSP from "./pages/DetailsSP";
import MyAppoint from "./componets/MyAppoint";
import Appoint from "./componets/Appoint";
import NotFound from "./pages/NotFound";
import AddProject from "./componets/AddProject";
import SPProject from "./pages/SPProject";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider resetCSS={false}>
          <Routes>
            <Route
              path="/serviceprovider/:provider"
              element={<ServicePage />}
            />
            <Route path="/sginup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Service-profile" element={<ServiceProfile />} />

            <Route path="/details" element={<DetailsSP />} />
            <Route path="/service-provider-project" element={<SPProject />} />
            <Route path="/appointment/:userId" element={<Appoint />} />
            <Route path="/my-appointment" element={<MyAppoint />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
