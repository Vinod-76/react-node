import Header from "./component/header/header";
import Login from "./component/Auth/Login";
import ContactUs from "./component/header/Contactus";
import About from "./component/header/About";
import Register from "./component/Auth/Resgister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="vStyle" />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
