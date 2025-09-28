function Footer({setWindownum}) {
    return(
        <>
        <hr style={{border: '4px, solid, black'}}/>
        <button className='homebutton' onClick={() => setWindownum(0)}>Home</button>
        </>
    )
}

export default Footer