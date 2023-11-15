import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <li className="navstyle">
      <Link to="/">Home</Link>
      <Link to="/body1">Body1</Link>
      <Link to="/body2">Body2</Link>
      <Link to="/aboutstate">AboutState</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/showhide">ShowHide</Link>
      <Link to="/exercitiustyle">ExercitiuStyle</Link>
      <Link to="/homecar">HomeCar</Link>
      <Link to="/footer">Footer</Link>
      <Link to="/monkeys">Monkeys</Link>
    </li>
  );
};
