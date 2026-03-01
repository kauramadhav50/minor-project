import Navbar from './Navbar.jsx';
import MobileSidebar from './MobileSidebar.jsx';
import DesktopNavbar from './DesktopNavbar.jsx';
import Postview from './Home.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';

const Home = () => {

  const [open, setOpen] = useState(false);

  return (

    <div className="bg-[#f3f2ef] min-h-screen">

      <Navbar setOpen={setOpen} />

      <DesktopNavbar />

      <MobileSidebar open={open} setOpen={setOpen} />


      <div className="pt-16 pb-16">

        <div className="max-w-[600px] mx-auto flex flex-col gap-3">

          <Postview />
          <Postview />
          <Postview />

        </div>

      </div>


      <div className="fixed bottom-0 w-full md:hidden">
        <Footer />
      </div>

    </div>

  )
}

export default Home;