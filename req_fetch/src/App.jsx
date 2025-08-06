import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchGet from './components/FetchGet'

function App() {

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FetchGet />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
