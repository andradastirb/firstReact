import Car from "./Car";
import { Cars } from "./DataBase";

export const HomeCar = () => {
  const cars = Cars;
  return (
    <div className="App">
      {cars.map((car, i) => {
        return <Car name={car.name} year={car.year} key={car.key} />;
      })}
    </div>
  );
};
