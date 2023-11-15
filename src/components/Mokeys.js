import { Link } from "react-router-dom";

export const Monkeys = () => {
  const ids = [1, 2, 3];
  return (
    <div className="clstyle">
      <h1>Monkeys</h1>
      {ids.map((id) => {
        return <Link to={`/monkeys/${id}`}>Monkey {id}</Link>;
      })}
    </div>
  );
};
