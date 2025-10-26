import { useState } from "react"
import { allColor } from "../data/allColor";    // data qovluğuna nisbətən
import type { Color } from "../models/color.model";; // models qovluğuna nisbətən

export default function ColorSequenceGame(){

 const [colors,setColors]=useState<Color[]>([]);


useEffect(() => {
    const saveNotes = async () => {
      const data = await localStorage.getItem("notes");

      if (!data) {
        await localStorage.setItem("notes", JSON.stringify(allNotes));
        setColors(allNotes);
      } else {
        setNotes(JSON.parse(data));
      }
    };
    saveNotes();
  }, []);

    return( 
        <div>
            <p className="text-4xl">Hello</p>
        </div>
    )
}