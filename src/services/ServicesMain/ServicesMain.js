import React from 'react';
import { ReactComponent as productIcon } from '../../assets/icons/product-development.svg'
import { ReactComponent as webIcon } from '../../assets/icons/web-dev.svg'
import { ReactComponent as mobileIcon } from '../../assets/icons/mobile-dev.svg' 
import { ReactComponent as itConsulting } from '../../assets/icons/it-consulting.svg'
import { ReactComponent as uiux } from '../../assets/icons/ui-ux-design.svg'
import { ReactComponent as network } from '../../assets/icons/network.svg'
import { ReactComponent as testing } from '../../assets/icons/testing.svg'

import ServicesComp from "./ServicesComp";
import '../ServicesMain/ServicesMain.css'



const ServicesMain = () => {
    return ( 
        <div className="ServiceCardContainer">
            <ServicesComp
                title='Product Development'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon= {productIcon} 
            />
            <ServicesComp
                title='Web Development'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={webIcon} 
            />
            <ServicesComp
                title='Mobile Development'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={mobileIcon} 
            />
            <ServicesComp
                title='UI UX Development'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={uiux} 
            />
            <ServicesComp
                title='Testing '
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={testing} 
            />
            <ServicesComp
                title='IT Consulting'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={itConsulting} 
            />
            <ServicesComp
                title='BPO'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={itConsulting} 
            />
            <ServicesComp
                title='Networking and security'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={network} 
            />
            <ServicesComp
                title='Support and Maintenance'
                description='We create tailored solutions that align perfectly with your objectives, providing a competitive edge.'
                icon={productIcon} 
            />
            
        </div>
     );
}
 
export default ServicesMain;