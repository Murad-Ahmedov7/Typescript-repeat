import { useLocation } from "react-router-dom";
import type { Color } from "../models/color.model";

export default function EasyLevel() {
  const location = useLocation();
  // const colors: Color[] = location.state || []; // massiv kimi qəbul et
  //       console.log(Math.floor(Math.random()*4)+1)

  const randomColors=[
  {id:1,colorName:"Red",bgcolor:"bg-red-500",width:"w-40",height:"h-40"},
  {id:2,colorName:"Green",bgcolor:"bg-green-500",width:"w-40",height:"h-40"},
  {id:3,colorName:"Blue",bgcolor:"bg-blue-500",width:"w-40",height:"h-40"},
  {id:4,colorName:"yellow",bgcolor:"bg-yellow-500",width:"w-40",height:"h-40"}
  ]


  return (
    <div>
      {/* {colors.map((c) => (
        <p key={c.id}>{c.colorName}</p>
      ))} */}
      <p className="text-2xl font-bold">Level:Easy</p>

      <div className="flex items-center justify-center h-[70vh] gap-4 ">

        {/* <div className=" bg-red-500 w-40 h-40">
          <p className="flex justify-center items-center  w-full h-43 font-bold text-white text-xl">
            Red
          </p>
        </div>

        <div className=" bg-green-500 w-40 h-40 ">
          <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
            Green
          </p>
        </div>

        <div className=" bg-blue-500 w-40 h-40 ">
          <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
            Blue
          </p>
        </div>

        <div className=" bg-yellow-500 w-40 h-40">
          <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
            Yellow
          </p>
        </div> */}

        {
          randomColors.map((colors,index)=>(
            <div className={`${colors.bgcolor} ${colors.width} ${colors.height}`} key={Math.floor}>
           <p className="flex justify-center items-center  w-full h-43  text-white text-xl">
            {colors.colorName}
           </p>
            </div>
          ))
        }




      </div>
    </div>
  );
}

//try catch yaz