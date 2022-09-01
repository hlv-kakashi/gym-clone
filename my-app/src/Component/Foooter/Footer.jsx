import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { color } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { red,blue, } from '@mui/material/colors';
import styles from './Footer.module.css'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';

const Footer = () => {
  return (
    <>
    <div className={styles.maindiv}>
        <div className={styles.box1}>
            <h1 style={{fontSize:'55px'}}>WTF Fitness Experience?</h1>
            <div style={{display:'flex'}}>
            <div style={{height:"200px",width:"60px",backgroundColor:'#e35a5a',paddingBottom:'0px'}}></div>
            <p style={{fontSize:'30px', margin:'10px'}}>@ your regular gym cost?</p>
            </div>
        </div>
        <div className={styles.box2}>
            <div>
                 <AcUnitOutlinedIcon fontSize="large" style={{backgroundColor:'white',borderRadius:'10px',marginTop:'20px'}}/>
                <h3 style={{color:'white'}}>Morden Eqipments</h3>
            </div>
            <div>
                <SportsHandballOutlinedIcon fontSize="large" style={{backgroundColor:'white',borderRadius:'10px',marginTop:'20px'}}/>
                <h3 style={{color:'white'}}>Skilled Trainer</h3>
            </div>
            <div>
                <BeenhereOutlinedIcon fontSize="large" style={{backgroundColor:'white',borderRadius:'5px',marginTop:'20px'}}/>
                <h3 style={{color:'white'}}>Top classs Ambiance</h3>
            </div>
            <div>
                <CleanHandsOutlinedIcon fontSize="large" style={{backgroundColor:'white',borderRadius:'5px',marginTop:'20px'}}/>
                <h3 style={{color:'white'}}>Sanitized GYMS</h3>
            </div>
        </div>
    </div>
    <div className={styles.maindiv2}></div>


    <div style={{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'black',
        color:'white',
        margin:'auto'
    }}>
        <div style={{marginLeft:'100px'}}>
            <img style={{height:'100px',width:'100px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQF7rpSD_RZYmQ/company-logo_200_200/0/1660306649451?e=1669852800&v=beta&t=TrSYBYOMS331dFnayMwXUUYxaANo2byIA89EmsIdlxo'/>
            <div>
                <InstagramIcon fontSize="large"  sx={{color:red[500]}}/>
                <FacebookIcon fontSize="large" sx={{color:blue[500]}}/>
                <LinkedInIcon fontSize="large" sx={{color:blue[500]}}/>
            </div>
        </div>
        <div style={{textAlign:'left'}}>
            <h3>Quick Links</h3>
            <p>About</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>WTF in NEWS</p>
            <p>Terms & Confitons </p>
            <p>Refund & Cancellation</p>
        </div>
        <div style={{textAlign:'left'}}>
            <h3>Explore</h3>
            <p>Arenas</p>
            <p>Studios</p>
            <p>Nutrition</p>
        </div>
        <div style={{textAlign:'left', width:'15%',marginRight:'100px'}}>
            <h3>Contact</h3>
            <p><LocationOnIcon />Rp: S1502, Amrapali Silicon city ,Sector 76, Noida ,Uttar Pradesh, India</p>
            <p><LocationOnIcon/>Ho : C-86 B, Ground Floor, Section 8, Noida, Uttar Pradesh, India</p>
            <p><CallIcon/>+919090639005</p>
            <p><EmailIcon/>support@wtfup.me</p>
        </div>
    </div>
    </>
  )
}

export default Footer