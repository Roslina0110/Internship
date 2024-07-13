import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import{Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <h1>Welcome to Product App</h1>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
