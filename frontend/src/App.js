import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} exact />
        <Route path="/mynotes" element={<MyNotes/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
