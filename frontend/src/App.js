// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Main from './Components/Main.jsx'
// import Circulate from './Components/Circulate.jsx'
// import Gallery from './Components/Gallery.jsx'
// import Events from './Components/Events.jsx'
// import Course from './Components/Course.jsx'
// import Login from './Logins/Login.jsx'
// import Signup from './Logins/Signup.jsx'
// import ChangePassword from './Logins/ChangePassword.js'


// function App() {
//   return (
//     <div>
//       <BrowserRouter basename='IIS_City_Campus'>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/circulate" element={<Circulate />}>
//             <Route path="gallery" element={<Gallery />} />
//             <Route path="eventsmove" element={<Events />} />
//             <Route path="course" element={<Course />} />
//             <Route path='login' element={<Login />} />
//             <Route path='signup' element={<Signup />} />
//             <Route path='change-password' element={<ChangePassword/>} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main.jsx';
import Circulate from './Components/Circulate.jsx';
import Gallery from './Components/Gallery.jsx';
import Events from './Components/Events.jsx';
import Course from './Components/Course.jsx';
import Login from './Logins/Login.jsx';
import Signup from './Logins/Signup.jsx';
import ChangePassword from './Logins/ChangePassword.js';
import Dashboard from './Management/Dashboard.jsx'
// import UpdatePassword from './updatePassword.js';

function App() {
  return (
    <div>
      <BrowserRouter basename='IIS_City_Campus'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/circulate" element={<Circulate />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="eventsmove" element={<Events />} />
            <Route path="course" element={<Course />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='change-password' element={<ChangePassword />} />
            {/* <Route path='update-password' element={<UpdatePassword />} /> */}
          </Route>
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;