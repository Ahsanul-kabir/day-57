import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {FriendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${FriendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h1>This is friend details components. {FriendId}</h1>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
        </div>
    );
};

export default FriendDetails;