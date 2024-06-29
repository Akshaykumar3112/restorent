import { Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import '../style/style.css'; 
import { MenuList } from '../data/data';
import CustomButton from '../components/Button';
import CartContext from '../context/CartContext';

const Menu = () => {
  const initialCounts = MenuList.map(() => 0); // Initialize state with an array of zeros based on MenuList length
  const [counts, setCounts] = useState(initialCounts);

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) { // Ensure count doesn't go below zero
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  const { addToCart } = useContext(CartContext);

  return (
    <Box className="menu" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {
        MenuList.map((menu, index) => (
          <Card className='menuCard' key={menu.id} sx={{ maxWidth: "320px", m: 2 }}>
            <CardMedia
              sx={{ minHeight: '320px' }}
              component={'img'}
              src={menu.imageUrl}
              alt={menu.name}
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button className='btn-quantity' variant='contained' onClick={() => handleDecrement(index)}>-</Button>
                <TextField
                  value={counts[index]}
                  variant='outlined'
                  size='small'
                  sx={{ mx: 1, width: '50px' }}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      height: '30px',
                    },
                  }}
                />
                <Button className='btn-quantity' variant='contained' onClick={() => handleIncrement(index)}>+</Button>
              </Box>
              <CustomButton
                onClick={() => addToCart(menu, counts[index])}
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
