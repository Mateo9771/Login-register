import './App.css'
import ContainerIn from './Components/ContainerIn/ContainerIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Components/Register/Register'

function App() {
 

  return (
   <Router>
    <Routes>
      <Route path="/" element={<ContainerIn/>}/>
      <Route path="/create-user" element={<Register/>}/>
    </Routes>
   </Router>
  )
}

export default App
