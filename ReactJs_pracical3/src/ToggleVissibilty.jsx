import { useState } from "react";
const ToggleVissible = ()=> {
    const [isVissible, setIsVissible] = useState(false);
    const Toggle = ()=> {
        setIsVissible(!isVissible);
    }
    return(
        <div>
            <button onClick={Toggle}>{isVissible ? "Hide Message" : "Show Message"}</button>
            {
                isVissible && (
                    <p>This is a toggable Message</p>
                )
            }
        </div>
    )
}
export default ToggleVissible;