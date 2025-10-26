import { useState } from "react"
import type from "../models/color.model"; // models qovluğuna nisbətən

export default function ColorSequenceGame(){

 const [colors,setColors]=useState<Color[]>([]);

    return(
        <div>
            <p className="text-4xl">Hello</p>
        </div>
    )
}