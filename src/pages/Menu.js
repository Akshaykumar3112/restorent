import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { MenuList } from '../data/data';

const Menu = () => {
  return (
    
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          MenuList.map(menu => (
            <Card sx={{maxWidth: "350px", display: "flex", m:2  }}>
              <CardActionArea>
                <CardMedia sx={{minHeight: '360px'}} component={'img'} src={menu.imageUrl} alt={menu.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'} >
                    {menu.name}
                  </Typography>

                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>

  );
}

export default Menu;