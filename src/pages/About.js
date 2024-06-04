import { Box, Typography } from '@mui/material';
import React from 'react'



const About = () => {
  return (
  
       <Box className="about" sx={{
        my:3,
        minHeight: "100vh",
        textAlign:"Center",
        p:2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem" ,
        },
        "& p" :{
            textAlign: 'justify',
        }
       }}>
          <Typography variant='h4'>
              Welcome To My Restorent
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi odit esse nulla, soluta ullam. Aperiam id rem libero et impedit reprehenderit vero dolores excepturi culpa amet molestiae illo aliquam incidunt eius, eaque, optio veniam pariatur maxime sunt perspiciatis? Illum iste similique corporis voluptatum nam vero minus eos ipsam doloribus earum aliquid cupiditate aperiam dignissimos quaerat labore culpa, voluptate tempora magni totam quisquam perspiciatis. Mollitia rem voluptatibus at quo eum eos, reprehenderit, magni expedita obcaecati voluptas odio, id accusantium. Fugit nulla quos ea eum in eligendi facere.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam, minus accusamus magnam nisi harum! Illo itaque velit quod, sequi similique quisquam, tempora ad aliquid modi ullam hic molestiae autem exercitationem adipisci nesciunt ducimus esse quia. Atque molestiae eaque deleniti quaerat corporis nulla fugit, porro at quam sapiente? Id modi minima iure reiciendis et autem corporis quo laborum sed totam. Optio accusantium sequi adipisci? Inventore repellat beatae ea architecto iusto quidem tenetur illum harum praesentium suscipit, rem commodi esse vitae veniam fugiat alias aspernatur ducimus pariatur ullam? Error perspiciatis similique officiis aut, eius animi, maxime, placeat assumenda iure aliquam hic.
          </p>
       </Box>
  
  );
}

export default About;