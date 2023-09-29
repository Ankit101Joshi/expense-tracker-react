import React, { ReactNode } from "react";

interface Props {
  children: string;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className={"alert alert-danger alert-dismissible fade show"}
        role="alert"
      >
        <strong>{children}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
