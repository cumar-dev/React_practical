import  { useState } from "react";

function FavoriteColors() {
  const [color, setColor] = useState("");     
  const [colors, setColors] = useState([]);    

  // handle input change
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  // add new color
  const handleAdd = (e) => {
    e.preventDefault();
    if (color.trim() === "") return; 
    setColors([...colors, color]);   
    setColor(""); 
  };

  return (
    <div>
      <h2>🎨 My Favorite Colors</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Enter a color"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {colors.map((c, index) => (
          <li key={index} style={{ color: c }}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteColors;
