import React from 'react'
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import { useSelector } from 'react-redux';

function UserPage() {
    const data = useSelector(state => state.userReducer)
    console.log(data);
  return (
    <>
        <MainNavbar />
        <div className='h-100' style={{minHeight:'80vh'}}>
            <p className='p-0 m-0 text-capitalize fw-bold'>{data.name}</p>
            <p className='p-0 m-0'>{data.email}</p>
            <p className='p-0 m-0'>{data.phone}</p>
            <p className='p-0 m-0'>My Library : </p>
            <ol>
            {data.myLibrary.map((d,index) => {
              return <li key={index}>{d.judul}</li>
            })}
            </ol>
        </div>
        <MainFooter />
    </>
  )
}

export default UserPage