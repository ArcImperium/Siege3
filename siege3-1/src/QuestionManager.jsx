import Footer from './Footer.jsx'
import {useState} from 'react'
import CreateSet from './CreateSet.jsx'
import EditSet from './EditSet.jsx'
import LoadSet from './LoadSet.jsx'
import SelectSet from './SelectSet.jsx'

function QuestionManager({setWindownum}) {
    const [manager, setManager] = useState(0)

    function handleManager() {
        if (manager === 1) {
            return(
                <CreateSet/>
            )
        }
        else if (manager === 2) {
            return (
                <EditSet/>
            )
        }
        else if (manager === 3) {
            return (
                <LoadSet/>
            )
        }
        else if (manager === 4) {
            return (
                <SelectSet/>
            )
        }
        else {}
    }

    return(
        <>
        <h1 className='title'>Question Manager</h1>
        <div>
            <button className='managerbutton' onClick={() => setManager(1)}>Create Question Set</button>
            <button className='managerbutton' onClick={() => setManager(2)}>Edit Question Set</button>
            <button className='managerbutton' onClick={() => setManager(3)}>Load Question Set</button>
            <button className='managerbutton' onClick={() => setManager(4)}>Select Question Set</button>
        </div>
        {handleManager()}
        <Footer setWindownum={setWindownum}/>
        </>
    )
}

export default QuestionManager