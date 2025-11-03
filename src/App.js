import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Plants from './components/Plants'
import Animals from './components/Animals'
import Tools from './components/Tools'
import Irrigation from './components/Irrigation'
import AnimalDetails from './components/AnimalDetails'
import PlantDetails from './components/PlantDetails'
import ToolDetails from './components/ToolDetails'
import IrrigationDetails from './components/IrrigationDetails'
import Crops from './components/Crops'
import CropDetails from './components/CropDetails'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/plants/:id" element={<PlantDetails />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/animals/:id" element={<AnimalDetails />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/:id" element={<ToolDetails />} />
      <Route path="/irrigation" element={<Irrigation />} />
      <Route path="/irrigation/:id" element={<IrrigationDetails />} />
      <Route path = "/crops" element = {<Crops/>} />
      <Route path = "/crops/:id" element = {<CropDetails/>} />
    </Routes>
  </BrowserRouter>
)

export default App
