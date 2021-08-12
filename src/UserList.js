import React from 'react'
import axios from 'axios';
import {useEffect,useState } from 'react';



const UserList = () => {

    let [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => setListOfUsers(response.data));
    }, []);

    return (
        <div>
             {listOfUsers.map((elt,key)=>
            <div key={key}>
                <h4 style={{color:'red'}}>User {elt.id}:</h4>
                {[
                <p><span style={{color:'grey',fontWeight:'bold'}}>Id:</span> {elt.id}</p>,
                <p><span style={{color:'grey',fontWeight:'bold'}}>Name:</span>{elt.name}</p>,
                <p><span style={{color:'grey',fontWeight:'bold'}}>Email:</span> {elt.email}</p>
                ]}
            </div>)
            }
        </div>
    )
}

export default UserList