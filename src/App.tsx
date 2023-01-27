import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  const tokenArr = [
    {
      email:'ashu782001@gmail.com',
      password:'123',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaHU3ODIwMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJleHAiOjE2NzYyNTkwMjMsInJvbGUiOiJBZG1pbiJ9.qhv8dJ_TujaHGsfKb_tv29HKsIlmrAlxSnBebRoE2Aw'
    },
    {
      email:'ashu78@gmail.com',
      password:'12453',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaHU3OEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyNDUzIiwiZXhwIjoxNjc2MjU5MDIzLCJyb2xlIjoiQWRtaW4ifQ.Er74xWlr8R6cHjH8Ws2icHWulEML6Hmk6FhgigzjZOk'
    },
    {
      email:'123@gmail.com',
      password:'124',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyNCIsImV4cCI6MTY3NjI1OTAyMywicm9sZSI6InVzZXIifQ.YSy-fNkk6eEAqqWVQfm2DwkD7ue3TQyFV287cC4_eaw'
    },
    {
      email:'123@gmail.com',
      password:'123',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTUxNjIzOTAyMiwicm9sZSI6IkFkbWluIn0.vvRwNT7o2zZ3blRW8SPwMdcslzHT4cH3MuC7BfndZx0'
    }
  ]
  
  return (
    <div style={{height:'100vh'}} className='bg-primary-subtle'>
      <Routes>
        <Route path='/' element={<Login tokenArr={tokenArr}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
