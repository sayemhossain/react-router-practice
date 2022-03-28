import React, { useState } from "react";
import { useEffect } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h3>This is friends section.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
        praesentium officia sequi laborum iusto aut unde, quidem magnam placeat
        molestiae! Natus inventore enim iste praesentium, qui necessitatibus
        quae rem accusantium.
      </p>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
