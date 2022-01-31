import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import Carte from './Carte';
function ContactList() {
const [data,setData] = useState([])
const getList= () =>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then ((response) => {
        console.log(response)
        setData(response.data)
    })
}



  return <div className="carte">
      <button onClick={getList} > console log </button>
      {
      data.map((el,id) => <Carte contact={el} key={id} />)
 }

  </div>;
}

export default ContactList;
