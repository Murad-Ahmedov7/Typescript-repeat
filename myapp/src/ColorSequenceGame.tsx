import { useEffect, useState } from "react";
import { allColors } from "../data/allColors"; // data qovluğuna nisbətən
import type { Color } from "../models/color.model"; // models qovluğuna nisbətən
import { Link } from "react-router-dom";

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
    <div className="flex flex-col gap-3">
      <p className="font-bold text-3xl ">Please Select A Level:</p>

      <Link to="/level/easy" state={colors}>Easy</Link>
      <Link to="/level/medium">Medium</Link>
      <Link to="/level/hard">Hard</Link>
      <Link to="/level/custom">Custom your level: </Link>
    </div>
  );
}
