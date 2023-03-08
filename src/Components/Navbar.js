import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
          <div className="flex p-8 ">
            <img src={logo} alt="" className="h-10 w-10 mx-3 my-1" />
            <div className="text-3xl text-white">AstronomyApp</div>
            <div className='flex justify-end w-full h-10'>
              <Link to='/apod' className="bg-white h-10 w-40 rounded-full mx-1">
                  <div className="text-center align-middle leading-9">
                    NASA APOD
                  </div>
              </Link>
              <div className="bg-white h-10 w-40 rounded-full mx-1 leading-9">
                  <div className="text-center align-bottom">
                    About Me
                  </div>
              </div>
            </div>
          </div>
  
      </>
    );
  }

  export default Navbar