import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import MyProfile from './pages/MyProfile';
import DetailPage from './pages/DetailPage';
import Admin from './layouts/Admin';
import Auth from './layouts/Auth';

const App = () => {

  const items = [
    { id: 1, title: 'Item 1', description: 'Description 1', image: 'url1' },
    { id: 2, title: 'Item 2', description: 'Description 2', image: 'url2' }
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Home items={items}/>} />
          <Route path="/item/:id" element={<DetailPage items={items}/>} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Route>

        <Route path="/admin" element={<Admin/>}/>

        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App