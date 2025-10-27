import { allColors } from "../data/allColors";
import type { Color } from "../models/color.model";
import { useEffect, useState } from "react";

export default function EasyLevel() {
  const [randomColors, setRandomColors] = useState<Color[]>(allColors);
  const [time, setTime] = useState<number>(10);
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    setRandomColors([...randomColors].sort(() => Math.random() - 0.5));
  }, []);

  // console.log(randomColors)

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => clearInterval(timeoutId), 10000);
  }, []);

  const selectedColors = (selectedId: number) => {
    console.log("Clickedddddd");
    const found = ids.find((id) => id === selectedId);
    if (!found) {
      const newIds = [...ids, selectedId];

      setIds(newIds);
      console.log(newIds);
    }

    setRandomColors((prevColors) =>
      prevColors.map((color) =>
        color.id === selectedId
          ? { ...color, isSelected: !color.isSelected }
          : color
      )
    );

    console.log(randomColors);
  };

  return (
    <div>
      <p className="text-2xl font-bold">Level:Easy</p>

      <div className="flex items-center justify-center h-[70vh] gap-4 ">
        {randomColors.map((colors) => (
          <button
            onClick={() => selectedColors(colors.id)}
            className={`${colors.bgcolor} ${!colors.isSelected ? "opacity-100" : "opacity-50"}  ${colors.width} ${colors.height}  hover:scale-125    transition-transform ease-out  `}

            key={colors.id}
          >
            <p className="flex justify-center items-center  w-full h-44  text-white text-xl">
              {colors.colorName}
            </p>
          </button>
        ))}
      </div>
      <p>Remember the order of these elements in your mind within 10 seconds.</p>
      <div>{time}</div>
    </div>
  );
}

//try catch yaz

// arr.sort((a, b) => b - a);

//sort🔹 Solda/sağda xülasəsi
// Compare Value	Nəticə (Solda/sağda)
// < 0	a solda, b sağda
// > 0	b solda, a sağda
// = 0	dəyişmir

//kodda hemise yazanda funksilyari da yada sal mutleq
