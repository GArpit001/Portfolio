import './App.css'
import Profile from './components/Profile'
import Right from './components/Right'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className='bg-[#000000f2]  flex justify-between max-xl:flex-col py-[60px] px-[50px] gap-10 max-md:p-[15px] max-xl:p-[60px]  '>

        <Profile />

        <Right />



      </div>
    </BrowserRouter>

  )
}

export default App
