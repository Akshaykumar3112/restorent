import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = (props) => {
  return (
    <>
        <Box sx={{textAlign:'center', bgcolor:props.mode, color:'white', p:2}}>
            <Typography 
                variant='h5' 
                sx={{ "@media (max-width: 600px)":{
                    fontSize:"1rem",
                },
             }} >
                All Rights Reserved &copy; Akshay
            </Typography>
        </Box>
    </>
  )
}

export default Footer