import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Plants from './components/Plants'
import MarketPlace from './components/MarketPlace'
import Tools from './components/Tools'
import Irrigation from './components/Irrigation'
import Crops from './components/Crops'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/irrigation" element={<Irrigation />} />
      <Route path = "/crops" element = {<Crops/>} />
    </Routes>
  </BrowserRouter>
)

export default App
