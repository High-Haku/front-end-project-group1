import React, { useEffect } from 'react'
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

function UserPage() {
    const data = useSelector(state => state.userReducer)
    const navigate = useNavigate();
    
    useEffect(() => {
      if(data.name === '') navigate('/')
    },[])

  return (
    <>
        <MainNavbar />
        <Container fluid='md' className='my-4' style={{minHeight:'80vh', maxWidth:'900px'}}>
          <h3>My Profile</h3>
          <Row className='bg-light py-4 px-4'>
            <Col md='3' className='text-center mb-4'><img src={require('../images/user.png')} alt="user" width='100%' style={{maxWidth:'200px'}}/></Col>
            <Col md='9' className='px-4'>
            <div className='mb-3'>
                <div className='fw-bold'>Nama</div>
                <div>Bambang Pamungkas</div>
              </div>
              <div className='mb-3'>
                <div className='fw-bold'>Alamat</div>
                <div>Benyamin Sueb St. RT.13/RW.10, Pademangan Tim., Jakarta Utara, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14410</div>
              </div>
            </Col>
          </Row>
        </Container>
        <MainFooter />
    </>
  )
}

export default UserPage