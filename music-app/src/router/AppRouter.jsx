import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';

import { AlbumPage, HomePage } from '../pages';


export const AppRouter = () => {
  return (
      <>
        <Navbar />
          
        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="album" element={<AlbumPage />} />
              
            <Route path="/*" element={<Navigate  to="/home" />} />
        </Routes>
    </>
  )
}


