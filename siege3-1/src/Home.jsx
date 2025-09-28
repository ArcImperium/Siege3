function Home({setWindownum}) {
    return(
        <>
        <div>
            <h1 className='title'>Questionizer</h1>
            <button className='homebutton' onClick={() => setWindownum(1)}>Questions</button>
            <button className='homebutton' onClick={() => setWindownum(2)}>Review</button>
        </div>
        </>
    )
}

export default Home