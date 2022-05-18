
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Main from './Components/Main';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/main' element={
                    <RequireAuth>
                        <Main></Main>
                    </RequireAuth>
                }></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
        </div>
  );
}

export default App;
