import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './component/Index';
import Header from './component/Header';
import Home from './component/Home';
import AddMenu from './component/AddMenu';
import EditMenu from './component/EditMenu';

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/menu-list" element={<Home />} />

        <Route path="/add-menu" element={<AddMenu />} />

        <Route path="/edit-menu/:id" element={<EditMenu />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App