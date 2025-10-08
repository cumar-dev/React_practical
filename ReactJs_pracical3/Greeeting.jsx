function Greeting({isLoggedIn}) {
    // option1
    // if(isLoggedIn) {
    //     return <h1>Welcome back..</h1>
    // }else {
    //     return <h1>Please Sing In..</h1>
    // }

    return <h1>{isLoggedIn ? "Welcome Back" : "Please Sign In"}</h1>
}

export default Greeting;