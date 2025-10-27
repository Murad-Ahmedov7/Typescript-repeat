import { allColors } from "../data/allColors";
import type { Color } from "../models/color.model";
import { useEffect, useState } from "react";

export default function EasyLevel() {
  const [randomColors, setRandomColors] = useState<Color[]>(allColors);
  const [randomColors2, setRandomColors2] = useState<Color[]>(allColors);

  const [time, setTime] = useState<number>(10);
  const [count, setCount] = useState<number>(0);

  const [ids, setIds] = useState<number[]>([]);
  const [showElements, setShowElements] = useState<boolean>(true);

  useEffect(() => {
    setRandomColors([...randomColors].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    setRandomColors2([...randomColors2].sort(() => Math.random() - 0.5));
  }, []);


  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timeoutId);
      setShowElements(false);
    }, 10000);
  }, []);

  const selectedColors = (selectedId: number) => {
    const found = ids.find((id) => id === selectedId);
    if (!found) {
      const newIds = [...ids, selectedId];
      setIds(newIds);
      console.log(newIds);
    }


    setRandomColors2((prevColors) =>
      prevColors.map((color) =>
        color.id === selectedId
          ? { ...color, isSelected: !color.isSelected }
          : color
      )
    
    );

    const result=randomColors2.filter(rnd2=>rnd2.isSelected)
    

        //isSelected false olanlari filter eleyib cixar 

    console.log(randomColors);
  };

  const handleResult = () => {
    try {
      const allExist = ids.every((id, index) => id === randomColors[index].id);
      console.log("Nəticə:", allExist);
    } catch (err) {
      console.log("Xeta bas verdi", err);
    }
  };
  return (
    <>
      {showElements ? (
        <>
          <div className="flex flex-col items-center justify-center h-32 gap-5">
            <p className="text-2xl font-bold">Level: Easy</p>
            <p className="text-2xl">
              Remember the order of these elements in your mind within 10
              seconds.
            </p>
          </div>

          <div className="flex items-center justify-center h-[70vh] gap-4">
            {randomColors.map((colors) => (
              <button
                className={`${colors.bgcolor} ${
                  !colors.isSelected ? "opacity-100" : "opacity-50"
                } ${colors.width} ${
                  colors.height
                } hover:scale-125 transition-transform ease-out`}
                key={colors.id}
              >
                <p className="flex justify-center items-center w-full h-44 text-white text-xl">
                  {colors.colorName}
                </p>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center h-4 -mt-10">
            <p className="text-3xl">{time}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center h-[70vh] gap-4">
            {randomColors2.map((colors) => (
              <>
                <button
                  onClick={() => selectedColors(colors.id)}
                  className={`${colors.bgcolor} ${
                    !colors.isSelected ? "opacity-100" : "opacity-50"
                  } ${colors.width} ${
                    colors.height
                  } hover:scale-125 transition-transform ease-out`}
                  key={colors.id}
                >
                  <p className="flex justify-center items-center w-full h-44 text-white text-xl">
                    {colors.colorName}
                  </p>
                </button>
              </>
            ))}
          </div>

          <div className="flex items-center justify-center h-4">
            <button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleResult()}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
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
