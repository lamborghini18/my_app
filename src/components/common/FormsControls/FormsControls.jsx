import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <>
      <div>{props.children}</div>
      <Error>{hasError && <span>{meta.error}</span>}</Error>
    </>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <TextField
        {...input}
        {...restProps}
        id="outlined-basic"
        variant="outlined"
      />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

const Error = styled.div`
  color: red;
`;
