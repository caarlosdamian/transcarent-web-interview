import { data } from "./data";
import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      {data.map((animal) => (
        <p className={animal?.className} key={animal.id}>
          {animal.name}
        </p>
      ))}
    </div>
  );
}
