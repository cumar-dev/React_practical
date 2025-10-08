const Greeting = (props)=> {
return(
    <>
<h1>Hello {props.CurrentUser}</h1>
<span>Your role is: {props.Role}</span>
</>
) 

}

export default Greeting;