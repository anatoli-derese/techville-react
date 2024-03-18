import './homepage.css';
import {ReactComponent as arrow} from '../../src/assets/icons/arrow-right-solid.svg';
import usersImage from '../../src/images/users-image.jpg';

const Home = () => {

    const IconComponent = arrow;
    

    return (

        <div className="homePage">
               <div className="left-paragraph">

                <h2>Unlocking <br /> 
                    <em>Innovation</em> through <br /> Expert Software <br /> Solutions
                </h2>
                <p>At TechVille we build cutting-edge technology with creative solutuions to bring your ideas to life.</p>
                
                {/* <button>
                    Explore Our Services  <IconComponent className='icon'>{arrow}</IconComponent>
                </button> */}

               </div>

               <div className="rightPhotos">

                <article className="left">
                    <div className="image1">
                        <img src={usersImage} alt="People using a computer" />
                    </div>
                    <div className="rectangle1"></div>
                </article>


                <article className="right">
                    <div className="rectangle2">

                    </div>
                    <div className="image4">
                    <img src={usersImage} alt="People using a computer" />

                    </div>
                </article>



               </div>

        </div>




      );
}
 
export default Home;