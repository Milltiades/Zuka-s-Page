import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Backgroundcomponent from './components/Backgroundcomponent'
import FooterComponent from './components/FooterComponent'

import GlobalStylesComponent from './components/GlobalStylesComponent'
import HeaderComponent from './components/HeaderComponent'
import MenuComponent from './components/MenuComponent'
import MoviesComponent from './components/MoviesComponent'


function App() {

const refHome = useRef<any>('') 
const refAbout = useRef<any>('')
const navigate = useNavigate()
const name = useSelector( (store : any) => store.name.value)
const dispatch = useDispatch();
const [geo, setGeo] = useState<boolean>(false);
console.log(name)
  return (
    <div className="App">
      <GlobalStylesComponent/>
      <HeaderComponent name={name} dispatch={dispatch} navigate={navigate} refHome={refHome}/>
      <Routes>
        <Route path='/' element={<Backgroundcomponent setGeo={setGeo} geo={geo}  refHome={refHome} navigate={navigate} refAbout={refAbout}/>}/>
        <Route path='/movies' element={<MoviesComponent setGeo={setGeo} geo={geo} />}/>
        <Route path='/menu' element={<MenuComponent setGeo={setGeo} geo={geo} refHome={refHome} refAbout={refAbout} navigate={navigate} dispatch={dispatch}/>}/>
         
      </Routes>

      <FooterComponent name={name}/>
      
      
    </div>
  )
}

export default App


