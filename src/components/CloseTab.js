import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

export const CloseTab = () => {
    function closeWin() {
      window.top.close();
    }
  const handleOnClick = () => {
  setTimeout(function () {
    closeWin();
  }, 1000);
   
  };
  return (
    <Container>
      <div>Could not connect accounts</div>
      <Button onClick={handleOnClick}>Close</Button>
    </Container>
  );
};
