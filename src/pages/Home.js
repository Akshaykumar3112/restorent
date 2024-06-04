import React from 'react';
import {Link} from 'react-router-dom';
import Banner from '../images/banner.jpeg';
import { Button, Typography,Box, Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import '../style/style.css'; 
import member from '../images/member1.png';
import member1 from '../images/member2.png';
import member2 from '../images/member3.png';
import member3 from '../images/member4.png';
const Home = () => {
  return (
    <div>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>
            Best Food in Sydney
          </p>
          <Link to="/manu">
            <Button variant="contained">ORDER NOW</Button>
          </Link>
        </div>
      </div>
      <div>
        <Typography 
          variant='h4' 
          sx={{
            fontWeight:500, 
            justifyContent:'center', 
            display:'container', 
            m:2,  
          }} 
        >
          Our Team
        </Typography>
        <Box 
          sx={{
            display:'flex', 
            flexWrap:'wrap', 
            justifyContent:'center'
            }}
        >
          <Card sx={{maxWidth:"250px", m:2}}>
            <CardActionArea>
              <CardMedia  
                component="img"
                image={member}
                alt="team member"
                sx={{
                  minHeight: "250px"
                }}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component='div' >Keem Lie</Typography>
                <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni sapiente? Dolores ut voluptates tenetur.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{maxWidth:"250px", m: 2 ,}}>
            <CardActionArea>
              <CardMedia  
                component="img"
                image={member1}
                alt="team member"
                sx={{
                  minHeight: "250px"
                }}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component='div' >Olivia</Typography>
                <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni sapiente? Dolores ut voluptates tenetur.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{maxWidth:"250px", m: 2 ,}}>
            <CardActionArea>
              <CardMedia  
                component="img"
                image={member2}
                alt="team member"
                sx={{
                  minHeight: "250px"
                }}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component='div' >Jack Oliver</Typography>
                <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni sapiente? Dolores ut voluptates tenetur.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{maxWidth:"250px", m: 2   
          }}>
            <CardActionArea>
              <CardMedia  
                component="img"
                image={member3}
                alt="team member"
                sx={{
                  minHeight: "250px"
                }}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component='div' >Thomas</Typography>
                <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni sapiente? Dolores ut voluptates tenetur.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Home;