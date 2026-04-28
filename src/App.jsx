
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Friends from './Components/Friends/Friends' 
import { Suspense } from 'react'
import Banner from './Components/Banner/Banner'
const friendDataPromise = fetch('/data.json').then((res) => res.json())



function App() {
  
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>

     <Suspense  fallback={<span className="loading loading-spinner text-accent"></span>}>
         <Friends
         friendData={friendDataPromise}
         
         ></Friends>
     </Suspense>
    
     <Footer></Footer>
    </>
  )
}

export default App
