import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Items, Pokemon, Pokemons, WhosThatPokemon } from './pages'


function App() {

  return (

    <Router>
      <div className="app">
        <Routes>
          <Route path='/pokemon/:name' element={<Pokemon />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/items' element={<Items />} />
          <Route path='/whos-that-pokemon' element={<WhosThatPokemon />} />
          <Route path='/' element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
