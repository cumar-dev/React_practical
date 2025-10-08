function ListsArray() {
    const fruits = ["Apple", "Banana", "Cherry", "Mango"];
    return(
        <>
        <ul>
            {
                fruits.map((fruit)=> (
                    <li key={fruit}>{fruit}</li>
                ))
            }
        </ul>
        </>
    )
}

export default ListsArray;