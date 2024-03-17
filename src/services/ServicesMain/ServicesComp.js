import React from 'react';
import '../ServicesMain/ServicesComp.css'; 

const ServicesComp = (props) => {
    const IconComponent = props.icon; 

    return ( 
        <div className="ServicesComp">
            <div className="ServicesCompIcon">
                {/* Render the icon dynamically */}
                <IconComponent className='icon'></IconComponent>
            </div>
            <div className="ServicesCompTitle">
                <p className='compTitle'>{props.title}</p>
            </div>
            <div className="ServicesCompDescription">
                <p className='compDescription'>{props.description}</p>
            </div>
        </div>
     );
}
 
export default ServicesComp;
