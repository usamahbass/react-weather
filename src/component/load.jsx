import React from "react";

export default function Load() {
  return (
    <div
      className="spinner-border text-white "
      role="status"
      style={{
        position: "absolute",
        top: "45%",
        left: "47%",
        width: "3rem",
        height: "3rem"
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
