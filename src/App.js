import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Body1 } from "./components/Body1";
import Body2 from "./components/Body2";
import { Calculator } from "./components/Calculator";
import { AboutState } from "./components/AboutState";
import { ExercitiuStyle } from "./components/ExercitiuStyle";
import { ShowHide } from "./components/ShowHide";
import { HomeCar } from "./components/HomeCar";
import { HomeEffect } from "./components/HomeEffect";
import { Navbar } from "./components/Navbar";
import { Monkeys } from "./components/Mokeys";
import { Monkey } from "./components/Monkey";

function App() {
  const name = "Andra";
  // const doSomething = () => {
  //   console.log("works");
  // };

  const arr = [
    { name: "Azorel", age: "3", id: 1, friendly: true },
    { name: "Papi", age: "5", id: 2, friendly: false },
    { name: "Grivei", age: "2", id: 3, friendly: true },
  ];

  const monkeyArr = [
    { name: "Cita", age: "3", id: 1, friendly: true },
    { name: "King Kong", age: "5", id: 2, friendly: false },
    { name: "Chucky", age: "2", id: 3, friendly: true },
  ];

  return (
    <div>
      <div className="App">
        <p>{name}</p>
      </div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeEffect />} />
          <Route path="/body1" element={<Body1 array={arr} />} />
          <Route path="/body2" element={<Body2 />} />
          <Route path="/aboutstate" element={<AboutState />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/showhide" element={<ShowHide />} />
          <Route path="/exercitiustyle" element={<ExercitiuStyle />} />
          <Route path="/homecar" element={<HomeCar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/monkeys" element={<Monkeys />} />
          <Route
            path="/monkeys/:id"
            element={<Monkey monkeyArr={monkeyArr} />}
          />
          <Route path="*" element={<p>This page is not available</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
