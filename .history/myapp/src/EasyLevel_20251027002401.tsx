
import { allColors } from "../data/allColors";
import type { Color } from "../models/color.model";
import { useEffect, useState } from "react";

export default function EasyLevel() {

  // const colors = [
  //   {
  //     id: 1,
  //     colorName: "Red",
  //     bgcolor: "bg-red-500",
  //     width: "w-40",
  //     height: "h-40",
  //   },
  //   {
  //     id: 2,
  //     colorName: "Green",
  //     bgcolor: "bg-green-500",
  //     width: "w-40",
  //     height: "h-40",
  //   },
  //   {
  //     id: 3,
  //     colorName: "Blue",
  //     bgcolor: "bg-blue-500",
  //     width: "w-40",
  //     height: "h-40",
  //   },
  //   {
  //     id: 4,
  //     colorName: "Yellow",
  //     bgcolor: "bg-yellow-500",
  //     width: "w-40",
  //     height: "h-40",
  //   },
  // ];

  const [randomColors,setRandomColors]=useState<Color[]>([allColors])



  const [time, setTime] = useState<number>(10);

  useEffect(()=>{
setRandomColors([...randomColors].sort(() => Math.random() - 0.5))
  },[])

  // console.log(randomColors)

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => clearInterval(timeoutId), 10000);
  }, []);

  return (
    <div>
      {/* {colors.map((c) => (
        <p key={c.id}>{c.colorName}</p>
      ))} */}
      <p className="text-2xl font-bold">Level:Easy</p>

      <div className="flex items-center justify-center h-[70vh] gap-4 ">
        {randomColors.map((colors) => (
          <button
            onClick={() => console.log(colors.id)}
            className={`${colors.bgcolor} ${colors.width} ${colors.height} hover:scale-125   transition-transform ease-out`}
            key={colors.id}
          >
            <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
              {colors.colorName}
            </p>
          </button>
        ))}

        {time}
      </div>
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
