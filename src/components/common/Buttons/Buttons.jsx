import React from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export const BlueButton = ({ input, ...props }) => {
  debugger;
  return (
    <>
      <Button
        {...input}
        {...props}
        endIcon={<SendIcon />}
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </>
  );
};
