import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Home = () => {
    return (

        <div className='flex justify-center'>
            <Navbar />

            <div className='fixed bottom-0 w-full md:hidden'>

                <Footer />
            </div>
        </div>

    )
}

export default Home
