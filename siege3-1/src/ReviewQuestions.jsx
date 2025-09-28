import Footer from './Footer.jsx'

function ReviewQuestions({setWindownum}) {
    function runReview() {
        let run = 0
        while (run < length()) {

        }
    }

    return(
        <>
        <h1 className='title'>Review Questions</h1>
        {runReview()}
        <Footer setWindownum={setWindownum}/>
        </>
    )
}

export default ReviewQuestions