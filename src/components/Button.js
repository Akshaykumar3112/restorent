import React from "react";
import propTypes from 'prop-types';
import '../style/style.css';
import { Button } from "@mui/material";



const CustomButton= ({label, styleType, onClick, startIcon}) =>{

    return (
        <Button 
            className={styleType} 
            variant="contained" 
            onClick={onClick}
            startIcon =  {startIcon}
            sx={{m:1}}
        >
            {label}
        </Button> 
    );
};

CustomButton.propTypes = {
    styleType: propTypes.string,
    onClick: propTypes.func.isRequired,
};



export default CustomButton;
