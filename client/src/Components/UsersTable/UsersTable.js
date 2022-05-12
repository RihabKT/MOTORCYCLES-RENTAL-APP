import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../JS/actions/userActions';
import Loader from '../Loader/Loader';
import "./UsersTable.css";

const UsersTable = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users)
    const loading = useSelector(state => state.userReducer.loading)
  
    const getAllUsers = () =>{
      dispatch(getUsers())
    }
  
    useEffect (() =>{
   getAllUsers()}, [])

  return loading? <Loader/> : (


    <>
    <div style={{ textAlign:"center", paddingLeft:"150px",paddingBottom:"50px", cursor:"pointer"}}>

<h2 className='userstitle'> USERS TABLE: </h2>

<table className='usertable'>

<thead >
     <tr >
     <th className='thUsers'> USER ID </th>
     <th className='thUsers'> FIRST NAME </th>
     <th className='thUsers'> LAST NAME</th>
     <th className='thUsers'> EMAIL </th>
     <th className='thUsers' > PHONE </th>
     <th className='thUsers' > ADDRESS </th>
     <th className='thUsers'> ROLE </th>
     </tr>
 </thead>


 {users &&
              users.map((user, _id) => {
return(
    <tbody className='rowuser' key={_id}>
                    <tr>
                      <td className='tdUsers'>{user._id}</td>
                      <td className='tdUsers'>{user.firstName}</td>
                      <td className='tdUsers'>{user.lastName}</td>
                      <td className='tdUsers'>{user.email}</td>
                      <td className='tdUsers' >{user.phone}</td>
                      <td className='tdUsers'>{user.address}</td>
                      <td className='tdUsers'>{user.role}</td>
                    </tr>
                  </tbody>
                );
              })}




 </table>
    </div>


    </>
  )
}

export default UsersTable