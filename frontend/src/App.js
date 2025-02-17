import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import Circulate from './Components/Circulate'
import Gallery from './Components/Gallery'
import Events from './Components/Events'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/circulate" element={<Circulate />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="eventsmove" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App