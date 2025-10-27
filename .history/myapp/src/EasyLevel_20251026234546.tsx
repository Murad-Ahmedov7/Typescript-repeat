import { useLocation } from "react-router-dom";
import type { Color } from "../models/color.model";

export default function EasyLevel() {
  const location = useLocation();
  // const colors: Color[] = location.state || []; // massiv kimi qəbul et
  //       console.log(Math.floor(Math.random()*4)+1)

  const colors=[
  {id:1,colorName:"Red",bgcolor:"bg-red-500",width:"w-40",height:"h-40"},
  {id:2,colorName:"Green",bgcolor:"bg-green-500",width:"w-40",height:"h-40"},
  {id:3,colorName:"Blue",bgcolor:"bg-blue-500",width:"w-40",height:"h-40"},
  {id:4,colorName:"Yellow",bgcolor:"bg-yellow-500",width:"w-40",height:"h-40"}
  ]

  const randomColors=[...colors].sort(()=>Math.random()-0.5)

  // console.log(randomColors)

  const timeoutId=setInterval(()=>{
   
  },3000)
  // clearTimeout(timeoutId)

  return (
    <div>
      {/* {colors.map((c) => (
        <p key={c.id}>{c.colorName}</p>
      ))} */}
      <p className="text-2xl font-bold">Level:Easy</p>

      <div className="flex items-center justify-center h-[70vh] gap-4 ">

        {
          randomColors.map((colors)=>(
            <button onClick={()=>console.log(colors.id)}  className={`${colors.bgcolor} ${colors.width} ${colors.height} hover:scale-125   transition-transform ease-out`} key={colors.id}>
           <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
            {colors.colorName}
           </p>
            </button>
          ))
        }

        {setInterval}



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