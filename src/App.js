import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ReferHome from "./components/ReferHome";
import EnrolledFriends from "./components/EnrolledFriends";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ReferHome />} />
      <Route path="/enrolled" element={<EnrolledFriends />} />
    </Routes>
  </BrowserRouter>
);

export default App;
