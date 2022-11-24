import './App.css';
import Sidebar from './Sidebar';
import TVPage from './TVPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>
  <>
    <Sidebar />
    <Routes>
      <Route path="/:channelId" element={<TVPage />} />
    </Routes>
  </>

export default App;
