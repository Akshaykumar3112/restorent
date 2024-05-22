import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { FormatAlignJustify } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{
      minHeight:"80vh",
    }}>
      <Box sx={{
        p:10,
        pb:2,
        "& h4" :{
          fontWeight: "bold",
          mb: 1,
          lineHeight:1,
        },
        "& p" :{
          lineHeight:1.5,
          fontSize:"20px",
        },
        "@media ( max-width:600px)" :{
          my:5,
          p:2,
            "& h4" :{
            fontWeight: "bold",
            mb: 1,
            lineHeight:1,
            },
          "& p" :{
            lineHeight:1.5,
            fontSize:"20px",
            textAlign:'justify',
          },
        }
      }}>
          <Typography variant='h4'>
            Contact Us
          </Typography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolore et similique vitae qui nemo fuga labore quam, distinctio corrupti maiores eveniet laborum earum reprehenderit dolores numquam mollitia voluptates tempore, necessitatibus nesciunt culpa error animi praesentium. Illo ipsam officiis earum aperiam nihil, inventore ducimus suscipit veritatis magni minima, minus odio?
          </p>
      </Box>

      <Box sx={{ 
        my:10,
        ml:10,
        width:"600px",
        "@media (max-width:600px)":{
          width:"300px",
          my:5,
          ml:5,
        }
        }}>
        <TableContainer component={Paper}>
          <Table aria-label="Contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  bgcolor:'black',
                  color:'white',
                }} align='center' >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{
                      color:"red",
                      pt:1,
                    }}/> 1800-00-0000 (TollFree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{
                      color:"skyblue",
                      pt:1,
                    }}/> myrestorent@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddIcCallIcon sx={{
                      color:"green",
                      pt:1,
                    }}/> 1234567890
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Box>
  );
}

export default Contact;