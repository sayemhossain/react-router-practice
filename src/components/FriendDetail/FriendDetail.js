import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  return (
    <div>
      <h3>This is friend details about: {friendId}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis
        aspernatur consequuntur nemo id laborum. Numquam dolorem voluptate quam
        voluptates minus, accusantium dolor reiciendis fuga expedita quibusdam
        ad asperiores odio.
      </p>
    </div>
  );
};

export default FriendDetail;
