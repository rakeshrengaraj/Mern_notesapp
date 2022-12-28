import React from "react";
import {Spinner } from "react-bootstrap"

const LoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        animation="border" className='me-2' style={{ width: '5rem', height: '5rem', position: 'absolute' }}
      />
    </div>
  );
};

export default LoadingScreen;
