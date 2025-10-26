import { useState } from "react"

export default function ColorSequenceGame(){
import { Color } from "./models/color.model"; // models qovluğundan
import { allColor } from "./data/allColor"; // data qovluğundan
 const [colors,setColors]=useState<Color[]>([]);

    return(
        <div>
            <p className="text-4xl">Hello</p>
        </div>
    )
}