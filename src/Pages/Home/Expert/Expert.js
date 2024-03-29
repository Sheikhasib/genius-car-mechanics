import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="img-container" src={img} alt="" />
            <h3>name: {name}</h3>
            <h5 className="text-success">{expertize}</h5>
        </div>
    );
};

export default Expert;