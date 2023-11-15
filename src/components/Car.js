import { useState } from "react";

const Car = (props) => {
  const [bg, setBg] = useState(true);

  const lightgreen = {
    backgroundColor: "lightgreen",
  };
  const green = {
    backgroundColor: "green",
  };

  return (
    <div style={bg ? lightgreen : green}>
      <h2>
        {props.name} was made in {props.year}
      </h2>
      <button onClick={() => setBg((prev) => !prev)}>Change background</button>
    </div>
  );
};

export default Car;
