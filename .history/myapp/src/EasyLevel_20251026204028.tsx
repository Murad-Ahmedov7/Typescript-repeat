import { useLocation } from "react-router-dom";
import type { Color } from "../models/color.model";

export default function EasyLevel() {
  const location = useLocation();
  const colors: Color[] = location.state || []; // massiv kimi qəbul et

  return (
    <div>
      {/* {colors.map((c) => (
        <p key={c.id}>{c.colorName}</p>
      ))} */}

      <div className="flex items-center justify-center h-[70vh] gap-4">
        <div className=" bg-red-500 w-40 h-40">
          <p className="flex justify-center items-center  w-full h-43 font-bold text-white text-xl">Red</p>
        </div>

        <div className=" bg-green-500 w-40 h-40 ">
          <p className="flex justify-center items-center  w-full h-43">Green</p>
        </div>

        <div className=" bg-blue-500 w-40 h-40 ">
          <p className="flex justify-center items-center  w-full h-43">Blue</p>
        </div>

        <div className=" bg-yellow-500 w-40 h-40">
          <p className="flex justify-center items-center  w-full h-43">
            Yellow
          </p>
        </div>
      </div>
    </div>
  );
}
