import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Monkey = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  // console.log(param);
  // console.log(props.monkeyArr);

  const [monkeyFound, setMonkeyFound] = useState("");

  useEffect(() => {
    props.monkeyArr.map((m) => {
      if (m.id === +param.id) {
        // console.log(m);
        setMonkeyFound(m);
      }
      // return console.log("unmount"); --> ex. unount
    });
  }, []);

  // Al doilea paramentru din useEffect:
  // [] --> se intampla cand componenta este creata (mount)
  // [parametru] --> mount + update, se intampla numai cand paramentrul isi face update
  // return --> unmount, se foloseste pentru clean-up

  return (
    <div className="clstyle">
      <p>Monkey {monkeyFound.name}</p>
      <p>
        is {monkeyFound.age} years old and is {!monkeyFound.friendly && " not "}{" "}
        friendly.
      </p>
      <button onClick={() => navigate("/monkeys")}>Go back</button>
    </div>
  );
};
