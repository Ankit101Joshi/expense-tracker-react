import React from "react";

export default function Message() {
  const name = "Ankit";
  if (name) return <div>Hello {name}</div>;
  return <div>Hello World</div>;
}
