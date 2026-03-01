import { useState } from 'react'
import './App.css'

import Footer from '/components/Footer.jsx'
import Navbar from '../components/Navbar'
import DesktopNavbar from '../components/DesktopNavbar.jsx'
import MobileSidebar from '../components/MobileSidebar.jsx'

import { Outlet } from 'react-router-dom';


function App() {

  const [open, setOpen] = useState(false);

  return (

    <div className="bg-[#f3f2ef] min-h-screen overflow-y-auto no-scrollbar">


      {/* Navbars */}

      <Navbar setOpen={setOpen} />

      <DesktopNavbar />


      {/* Sidebar */}

      <MobileSidebar open={open} setOpen={setOpen} />


      {/* Pages */}

      <div className="pt-16 pb-16">

        <div className="mx-auto flex flex-col gap-3 max-w-[600px]">



          <Outlet />

        </div>

      </div>


      {/* Mobile Footer */}

      <div className="fixed bottom-0 w-full md:hidden">

        <Footer />

      </div>


    </div>

  )
}

export default App