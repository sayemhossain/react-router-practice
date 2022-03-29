import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h3>This is friend details about: {friendId}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis
        aspernatur consequuntur nemo id laborum. Numquam dolorem voluptate quam
        voluptates minus, accusantium dolor reiciendis fuga expedita quibusdam
        ad asperiores odio.
      </p>
      <p>{friend.length}</p>
    </div>
  );
};

export default FriendDetail;
