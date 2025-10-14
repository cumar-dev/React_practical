import React, { useContext } from 'react'
import ThemeContext from "./ThemeContext"
const ThemedComponent = () => {
    const theme = useContext(ThemeContext);
    const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease"
    }
  return (
    <div style={style}>this a {theme} -Themed Component</div>
  )
}

export default ThemedComponent;