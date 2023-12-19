import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Items, Pokemon, Pokemons } from './pages'


function App() {

  return (

    <Router>
      <div className="app">
        <Routes>
          <Route path='/pokemon/:name' element={<Pokemon />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/items' element={<Items />} />
          <Route path='/' element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
