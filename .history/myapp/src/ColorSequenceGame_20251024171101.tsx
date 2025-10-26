import { useState } from "react"
import { allColor } from "../data/allColor";    // data qovluğuna nisbətən
import type { Color } from "../models/note.model";; // models qovluğuna nisbətən

export default function ColorSequenceGame(){

 const [colors,setColors]=useState<Color[]>([]);

    return( 
        <div>
            <p className="text-4xl">Hello</p>
        </div>
    )
}