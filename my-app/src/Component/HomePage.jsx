import React from 'react';
import Navbar from './Nav-bar/Navbar';
import Footer from './Foooter/Footer';
import SearchBar from './Search-Bar/SearchBar';
import cover from '../assets/img/cover.png';
import { FaSearch } from 'react-icons/fa';
import GYM from './GymBrief';
import styled from 'styled-components';

const HomeDiv = styled.div`
.div{
  width: 75vw;
  height:150vh;
}
`
const Home = () => {
  const handleChange = () =>{

  }

  return (
    <HomeDiv style={{ background: 'black' }}>
      <Navbar />
      <div>
        <img src={cover} width='100%' alt='cover' />
        <div style={{ margin: '50px' }}>
          <SearchBar />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ color: 'white', textAlign: 'left', width: '20vw', margin: '50px' }}>
            <div style={{display:"flex",justifyContent:'space-between', alignItems:'center'}}>
            <p style={{ fontSize: '40px' }}>Filters</p>
            <button style={{background:'#920909', color:'white', fontSize:'18px', padding:'5px 15px',height:'35px', borderRadius:'5px'}}>Reset</button>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Location</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '2px solid #9da0a3', borderRadius: '5px', background: '#2e2e2e' }}>
                <FaSearch style={{ color: '#9da0a3', fontSize: '18px', padding: '16px 0px 20px 20px', }} />
                <input type='text' placeholder='Enter Location' style={{ height: '30px', width: '100%', background: '#2e2e2e', fontSize: '18px', fontWeight: '500', border: 'none', }} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Price</p>
              <div style={{ display: 'flex', gap: "20px" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '2px solid #9da0a3', borderRadius: '5px', background: '#2e2e2e' }}>
                  <input type='text' placeholder='Min' style={{ height: '30px', margin: "0px 10px", width: '100%', background: '#2e2e2e', fontSize: '18px', fontWeight: '500', border: 'none', }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '2px solid #9da0a3', borderRadius: '5px', background: '#2e2e2e' }}>
                  <input type='text' placeholder='Max' style={{ height: '50px', margin: "0px 10px", width: '100%', background: '#2e2e2e', fontSize: '18px', fontWeight: '500', border: 'none', }} />
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: '500' }}>Cities</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '2px solid #9da0a3', borderRadius: '5px', background: '#2e2e2e' }}>
                <select className='SignUpinputAdjust' onChange={handleChange} style={{width:'100%',height:'50px', background: '#2e2e2e', color:'white', border:'none'}}>
                  <option value='Select' style={{width:'100%',height:'50px', background: '#2e2e2e', color:'white', border:'none'}}>-- Select City--</option>
                  <option value='Pune' style={{width:'100%',padding:'20px', background: '#2e2e2e', color:'white', border:'none'}}>Pune</option>
                </select>
              </div>
            </div>
          </div>
          <div className='div'>
            <GYM/>
          </div>
        </div>
      </div>
      <Footer />
    </HomeDiv>
  )
}

export default Home