import { allColors } from "../data/allColors";
import type { Color } from "../models/color.model";
import { useEffect, useState } from "react";

export default function EasyLevel() {
  const [randomColors, setRandomColors] = useState<Color[]>(allColors);
  const [time, setTime] = useState<number>(10);
  const [ids, setIds] = useState<number[]>([]);
  const [showElements,setShowElements]=useState<boolean>(false)

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
     {}
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
