import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import { Houses } from './pages/Houses';
import { HouseDetails } from './pages/HouseDetails';
import { AddHouse } from './pages/AddHouse';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/houses/:houseId' element={<HouseDetails />} />
        <Route path='/houses/add' element={<AddHouse />} />
      </Routes>
    </Layout>
  );
};
