import { useState } from "react"
import { Color } from "../models/color.model"; // models qovluğuna nisbətən
import { allColor } from "../data/allColor";    // data qovluğuna nisbətən
export default function ColorSequenceGame(){

 const [colors,setColors]=useState<Color[]>([]);

    return(
        <div>
            <p className="text-4xl">Hello</p>
        </div>
    )
}