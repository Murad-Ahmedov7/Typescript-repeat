import { allColors } from "../data/allColors";
import type { Color } from "../models/color.model";
import { useEffect, useState } from "react";

export default function EasyLevel() {
  const [randomColors, setRandomColors] = useState<Color[]>(allColors);
  const [time, setTime] = useState<number>(10);
  const [ids, setIds] = useState<number[]>([]);
  const [count,setCount]=useState<number>(0)

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
    const found = ids.find((id) => id === selectedId);
    if (found) return;
    const change=randomColors.find((r)=>r.id===selectedId)
    if(change===undefined){
      console.log("Color not found")
      return
    }
    // const result=change.isSelected===false?true:false
    setRandomColors(prevColors => 
  prevColors.map(color => 
    color.id === selectedId 
      ? {...color, isSelected: !color.isSelected} 
      : color
  )
);
    const newIds = [...ids, selectedId];
    setIds(newIds);
    change.isSelected=true
    console.log(newIds);
    }
   
      
    }

  };


  return (
    <div>
      <p className="text-2xl font-bold">Level:Easy</p>

      <div className="flex items-center justify-center h-[70vh] gap-4 ">
        {randomColors.map((colors) => (
          <button
            onClick={() => selectedColors(colors.id)}
            className={`${colors.bgcolor} ${colors.width} ${colors.height} hover:scale-125   transition-transform ease-out`}
            key={colors.id}
          >
            <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
              {colors.colorName}
            </p>
          </button>
        ))}
      </div>

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
