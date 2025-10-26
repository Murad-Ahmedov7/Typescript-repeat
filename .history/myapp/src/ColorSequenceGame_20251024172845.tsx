import { useEffect, useState } from "react";
import { allColors } from "../data/allColors"; // data qovluğuna nisbətən
import type { Color } from "../models/color.model"; // models qovluğuna nisbətən

export default function ColorSequenceGame() {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    const saveColors = async () => {
      const data = await localStorage.getItem("colors");

      if (!data) {
        await localStorage.setItem("colors", JSON.stringify(allColors));
        setColors(allColors);
      } else {
        setColors(JSON.parse(data));
      }
    };
    saveColors();
  }, []);

  return (
    <div>
      <p className="font-bold text-3xl ">
        Please Select A Level:
      </p>
      <></>
    </div>
  );
}
