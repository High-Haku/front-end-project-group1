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
        <Container className='my-5'>
          <Row>
            <Col md='3'><img src={require('../images/user.png')} alt="user" width='100%' style={{maxWidth:'200px'}}/></Col>
            <Col md='9'>
              <h2>Bambang Pamungkas</h2>
              <h5>0812345567</h5>
            </Col>
          </Row>
        </Container>
        <MainFooter />
    </>
  )
}

export default UserPage