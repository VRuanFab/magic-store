import { Outlet } from 'react-router-dom'
import HomeBar from './navBar/navBarHome'

function App() {

  return (
    <>
    <HomeBar/>
    <Outlet/>
    </>
  )
}

export default App
