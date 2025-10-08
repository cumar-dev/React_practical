function EventHandling({id}) {
    const handleClick = (id)=> {
        alert('button clicked' + id);
    }
    return(
        <>
        <h1>Events</h1>
        <button onClick={()=> handleClick(id)}>Cick Me..</button>
        </>
    )
}

export default EventHandling;