
import Postview from "./Postview.jsx";
import Profileinfo from "./Profileinfo.jsx";
import News from "./News.jsx";


const Home = () => {


  return (
    <div className="flex gap-4 justify-center">
      <div>
        <Profileinfo />
      </div>


      <div>

        <Postview />
      </div>

      <div>

        <News />

      </div>

    </div>
  );
};

export default Home; 
