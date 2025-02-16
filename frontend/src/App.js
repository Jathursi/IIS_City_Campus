import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/topbar" element={<Topbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App