import { Navigate, Route, Routes } from 'react-router-dom';

import { AlbumPage, HomePage } from '../pages';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="album" element={<AlbumPage />} />
              
            <Route path="/*" element={<Navigate  to="/home" />} />
        </Routes>
    </>
  )
}


