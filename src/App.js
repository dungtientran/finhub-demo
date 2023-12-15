import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// import NavbarComp from './components/Navbar/NavbarComp';
import { LocaleProvider } from './components/context/LocaleContext';
import NavbarComp from "./components/Navbar/NavbarComp";
import FooterSection from "./components/FooterSection/FooterSection";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Terms from "./pages/TermsAndConditions/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Contact from "./pages/Contact/Contact";
import Fund from "./pages/Fund/Fund";
import About from "./pages/About/About";
import BlogPage from "./pages/BlogPage/Blog";
import Knowledge from "./pages/Knowledge/Knowledge";
import UnSubscribe from "./pages/Unsubscribe";
import BlogViewMore from "./pages/BlogViewMore/BlogViewMore";

function App() {
  return (
    <LocaleProvider>
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path='/*' element={<Home />}></Route>
          {/* <Route exact path='home' element={<Home />}></Route>  */}
          <Route exact path='login' element={<Login />} ></Route>
          <Route exact path='signup' element={<Signup />} ></Route>
          <Route exact path='terms' element={<Terms />} ></Route>
          <Route exact path='privacy' element={<Privacy />} ></Route>
          <Route exact path='contact' element={<Contact />} ></Route>
          <Route exact path='fund' element={<Fund />} ></Route>
          <Route exact path='about' element={<About />}></Route>
          <Route exact path='blog' element={<BlogPage />}></Route>
          <Route exact path='/blog/:id' element={<BlogDetail />}></Route>
          <Route exact path='/blog/:category/:id' element={<BlogViewMore />}></Route>
          <Route exact path='/knowledge' element={<Knowledge />}></Route>
          <Route exact path='/unsubscribe' element={<UnSubscribe />}></Route>
        </Routes>
        <FooterSection />
      </Router>
    </LocaleProvider>
  );
}

export default App;
