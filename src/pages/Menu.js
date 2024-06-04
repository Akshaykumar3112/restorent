import { Box, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import React, { useContext } from 'react';
import '../style/style.css'; 
import { MenuList } from '../data/data';
import CustomButton from '../components/Button';
import CartContext from '../context/CartContext';



const Menu = () => {

  const { addToCart} = useContext(CartContext);
  return (
      
      <Box className="menu" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          MenuList.map(menu => (
            <Card className='menuCard' key={menu.id} sx={{maxWidth: "320px", m:2  }}>
              
                <CardMedia 
                  sx={{minHeight: '320px'}} 
                  component={'img'} 
                  src={menu.imageUrl} 
                  alt={menu.name} 
                />
                <CardContent>
                  <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography 
                      variant='h5' 
                      gutterBottom 
                      component={'div'} 
                    >
                      {menu.name}
                    </Typography>
                    
                    <Typography 
                      variant='h6' 
                      component={'div'}
                    >
                      {menu.price}$
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant='body2'
                  >
                    {menu.description}
                  </Typography>
                  
                </CardContent>
                <CardActions>
                  
                    <CustomButton 
                      onClick={() => addToCart(menu)} 
                      label="Add TO CART" 
                      styleType="btn-primary" 
                    />
                 
                </CardActions>
            </Card>
          ))
        }
      </Box>
 
  );
}

export default Menu;