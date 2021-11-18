import { useEffect, useState } from "react";
import { data } from "./data";
import "./index.css";

export default function Tree() {
  const [newAnimal, setnewAnimal] = useState();
  const [animales, setAnimales] = useState(data);
  useEffect(() => {}, [animales]);

  const addNewAnimal = (e) => {
    if (e.key === "Enter") {
      setAnimales([...animales, { name: newAnimal, id: animales.length + 1 }]);
    }
    return;
  };
  const deleteAnimal = (animalToDelete) => {
    setAnimales(
      animales.filter((val) => {
        return val.name !== animalToDelete;
      })
    );
  };
  console.log(animales);
  return (
    <div className="tree">
      {animales?.map((animal, key) => (
        <div
          key={key}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className={animal.className}>{animal.name}</p>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => deleteAnimal(animal.name)}
          >
            ❌
          </span>
        </div>
      ))}
      <input
        type="text"
        onKeyDown={addNewAnimal}
        onChange={(e) => setnewAnimal(e.target.value)}
      />
    </div>
  );
}
