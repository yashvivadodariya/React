import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import AddMovie from "./component/AddMovie"
import MovieList from "./component/MovieList";
import EditMovie from "./component/EditMovie";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <BrowserRouter>

      {/* Header Fix (badha page par dekhase) */}
      <Header />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MOVIE */}
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;