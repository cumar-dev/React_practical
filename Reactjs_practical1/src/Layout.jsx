const Header = ()=> {
    return <h1>Header Component</h1>
}

const Footer = ()=> {
return <h2>Footer Component</h2>
}

const WhyChooseUs = ()=> {
    return <p>Because We are the Best..</p>
}
const Layout = ()=> {
    return(
        <>
        <div>
            <Header />
            <main><WhyChooseUs /></main>
             <Footer />
        </div>
        </>
    )
}

export default Layout;