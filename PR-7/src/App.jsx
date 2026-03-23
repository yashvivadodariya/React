import {Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Addpage from './Components/Addpage'
import Editpage from './Components/EditPage'

function App(){
  return(
    <>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/add-page' element= {<Addpage/>} />
        <Route path='/edit-page/:id' element= {<Editpage/>} />
      </Routes>
    </>
  )
}

export default App;