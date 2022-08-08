import {  Navigate, Route, Routes} from 'react-router-dom';

import { AlbumPage, HomePage, ListPage } from '../pages';


export const AppRouter = () => {
  return (
      
    <Routes>
     
        <Route path="home" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="album/:collectionId" element={<AlbumPage />} />
   
        <Route path="/*" element={<Navigate to="/home" />} />
      
    </Routes>
    
  )
}


