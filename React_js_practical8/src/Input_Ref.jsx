import { useRef, useEffect } from "react"

const Input_Ref = () => {
    const inputRef = useRef(null);
    console.log(inputRef);
    useEffect(()=> {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
  return (
   <>
   <input ref={inputRef} type="text" placeholder='focus on mount!' />
   </>
  )
}

export default Input_Ref;