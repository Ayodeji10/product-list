import "./styles/styles.scss";
// import { data } from "./constants/data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";

function App() {
  // console.log(data);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
