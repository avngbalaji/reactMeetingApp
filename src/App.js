import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddMeeting from './pages/AddMeeting';
import MyMeeting from './pages/MyMeeting';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
     <Navigation />

     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add-meeting' element={<AddMeeting />}></Route>
      <Route path='/my-meeting' element={<MyMeeting />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
     </Routes>
    </div>
  );
}

export default App;
