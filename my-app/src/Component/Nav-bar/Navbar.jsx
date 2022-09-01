
import Button from '@mui/material/Button';
import { color } from '@mui/system';

import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      display:'flex',
      backgroundColor:'black',
      justifyContent:'space-around',
      position:"-webkit-sticky"
      }}>
      <img style={{height:'100px',widht:'100px',borderRadius:'15%'}} src='https://media-exp1.licdn.com/dms/image/C560BAQF7rpSD_RZYmQ/company-logo_200_200/0/1660306649451?e=1669852800&v=beta&t=TrSYBYOMS331dFnayMwXUUYxaANo2byIA89EmsIdlxo'/>
      <div style={{display:'flex', justifyContent:'space-evenly',width:'50%',marginTop:'20px'}}>
        <h3 style={{color:'white'}}>Fitness</h3>
        <h3 style={{color:'white'}}>Nutition</h3>
        <h3 style={{color:'white'}}>Gyms</h3>
        <h3 style={{color:'white'}}>Become WTF Partner</h3>
        <h3 style={{color:'white'}}>About Us</h3>
        <button style={{height:'30px',widht:'100px',marginTop:'16px',borderRadius:'5px',backgroundColor:'#CC2222',color:'white'}}>Login</button>
      </div>
    </div>
  )
}

export default Navbar