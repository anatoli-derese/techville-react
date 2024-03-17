import ServicesMain from "./ServicesMain/ServicesMain";
import Top from "./ServicesTop/Top";
import './Services.css'

const Services = () => {
    return ( 
        <div className="services">
            <div>
                <Top></Top>
            </div>
            <div>
                <ServicesMain></ServicesMain>
            </div>
        </div>
     );
}
 
export default Services;