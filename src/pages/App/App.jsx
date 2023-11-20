import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import NavBar from '../../components/NavBar'

export default function App() {

  const [user, setUser] = useState(null);


  return (
    <div className="App">
        { user ? (
          <>
            <NavBar user={user} />
            <Routes>
              <Route path="/" element={<MoviesListPage />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
              <Route path="/actors" element={<ActorListPage />} />
            </Routes>
          </>
        ) : 
            <LoginPage setUser={setUser} />
        }
    </div>
  )
}