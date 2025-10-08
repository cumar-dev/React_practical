import { useEffect, useState } from "react";
function Documenttitle() {
    const [title, setTitle] = useState('Hell, React');
    const [name, setName] = useState('Hamuuda');
    useEffect(() => {
//    document.title = "Use Effect";
      document.title = title;
      console.log(title);
    },[title]);
    return(
        <>
        <h1>Use Effect</h1>

        <div>
            <h2>Type to change the document title:</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        </>
    )
}
export default Documenttitle;