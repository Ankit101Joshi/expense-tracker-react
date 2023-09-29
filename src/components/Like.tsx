import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return (
      <div onClick={toggle}>
        <AiFillHeart color="#ff6b81" size={20} />
      </div>
    );
  }

  return (
    <div onClick={toggle}>
      <AiOutlineHeart color="#000000" size={20} />
    </div>
  );
};

export default Like;
