import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";

import Home from "./components/Home/Home";
import { DialogsContextProvider } from "./components/ModalDialog/context/DialogsContext";


const Header = React.lazy(()=> import('./components/Header'));
const Footer = React.lazy(()=> import('./components/Footer/Footer'));


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/detail/:title" element={<Detail/>}>
          </Route>
        </Routes>
        <DialogsContextProvider>
          <Footer />
        </DialogsContextProvider>
      </Router>
    </div>
  );
}

export default App;
