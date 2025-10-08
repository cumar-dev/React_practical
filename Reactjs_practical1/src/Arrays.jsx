import { useState } from "react";

function Items() {
    const [items, setIitems] = useState(["apple", "banana"]);
    const addItems = ()=> {
        setIitems([...items, "orange", "mango"]);
    }
    return(
        <>
        <ul>
            {
                items.map(item => (
                    <li>{item}</li>
                ))
            }
        </ul>
        <button onClick={addItems}>Add Items</button>
        </>
    )
}

export default Items;