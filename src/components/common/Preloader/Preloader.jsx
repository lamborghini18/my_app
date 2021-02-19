import React from "react";
import preloader from "../../../assets/images/loader.gif";
import styled from "styled-components";

const Preloader = (props) => {
  return (
    <div>
      <StylePreloader src={preloader} />
    </div>
  );
};

export default Preloader;

const StylePreloader = styled.img`
  width: 200px;
`;
