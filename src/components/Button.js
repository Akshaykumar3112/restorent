import React from "react";
import propTypes from 'prop-types';
import '../style/style.css';
import { Button } from "@mui/material";



const CustomButton= ({label, styleType, onClick}) =>{

    return (
        <Button 
            className={styleType} 
            variant="contained" 
            onClick={onClick} 
        >
            {label}
        </Button> 
    );
};

CustomButton.propTypes = {
    label: propTypes.string.isRequired,
    styleType: propTypes.string,
    onClick: propTypes.func.isRequired,
};



export default CustomButton;
