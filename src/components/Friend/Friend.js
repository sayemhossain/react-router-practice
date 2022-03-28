import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const nevigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    nevigate(path);
  };
  return (
    <div>
      <h4>Name: {name}</h4>
      <button onClick={showFriendDetail}>
        {username} {id}
      </button>
    </div>
  );
};

export default Friend;
