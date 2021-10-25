import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img:'https://i.ibb.co/gZPV5zc/Car-joy-smiling-spanner-occupation.jpg', name:'Andrew Smith', 
        expertize:'-Engine Experts'
    },
    {
        img:'https://i.ibb.co/mRGFFrX/Bearded-man-changing-tire-his-car.jpg', 
        name:'John Anderson', 
        expertize:'-Polish Experts'
    },
    {
        img:'https://i.ibb.co/L9PLw4c/Mechanic-changing-tires-car-service.jpg', name:'Zuku Mama', 
        expertize:'-Coloring Experts'
    },
    {
        img:'https://i.ibb.co/XVKRkCH/Smiling-mechanic-with-arms-crossed-spanner.jpg', name:'Kalia Mutha', 
        expertize:'-Mutha Experts'
    },
    {
        img:'https://i.ibb.co/60YdPxN/Hand-car-mechanic-with-wrench-auto-repair-garage.jpg', 
        name:'Gulli Boy', 
        expertize:'-Mouth Experts'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert 
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;