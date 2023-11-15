import { useState } from "react";
import { Button } from "./button/Button";

export const ShowHide = () => {
    const [seeText, setSeeText] = useState(true);

    const color1 = {
        color: "blue",
        backgroundColor: "pink",
      };

    const color2 = {
        color: "purple",
        backgroundColor: "green",
      }; 

    return (
        <>
        <Button setSeeText={setSeeText}/>
        <div style={seeText ? color1 : color2}>I change my color if you press Click</div>
        </>
    )
}