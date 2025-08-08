
import './App.css'
import Counter from './component/Counter'
import Greeting from './component/Greeting'

function App() {

    return (
        <>
            <h1>React + TS</h1>
            {/* componentes funcionais com TS*/}
            <Greeting name="João" />
            {/* Hooks com TS*/}
            <Counter />
        </>
    )
}

export default App
