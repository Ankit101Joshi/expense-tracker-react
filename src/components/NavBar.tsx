import React from "react";
import { FaOpencart } from "react-icons/fa";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <FaOpencart color="red" />
      {cartItemsCount}
    </div>
  );
};

export default NavBar;
