import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const List = () => {

 const [list,setList ] = useState([]);

 const fetchList = async () =>{
        try {

          const response = await axios.get(backendUrl + '/api/product/list');
          console.log(response);
          
          
        } catch (error) {
          console.log(error);
          toast.error(error.message)
          
        }
  
 }

 useEffect(()=>{
  fetchList()
 },[])

  return (
    <div>
      <p>hello</p>
      <button onClick={fetchList}>fetch</button>
    </div>
  )
}

export default List
