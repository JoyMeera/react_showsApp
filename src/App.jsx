import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom';
import Header from './layouts';
import { ShowProvider } from './contexts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ShowProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage/>}/>
          <Route path="/shows" >
            <Route index element={<Pages.ShowsPage/>}/>
            <Route path=":id" element={<Pages.ShowPage/>}/>
          </Route>
          <Route path="/search" element={<Pages.SearchPage/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route>
      </Routes>
    </ShowProvider>
  )
}

export default App
