import React, { memo, Fragment } from "react";
import styled from "styled-components";
import { Div } from "d-relax-components";
import { Close } from "styled-icons/material/Close";
import { useDialogsContext } from "../context/DialogsContext";
import PropTypes from "prop-types";

const BgContainer = styled(Div)`
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  background-color: #2C3E4B;
`;

const DialogNew = ({ module, children, ...props }) => {
  const { isOpen, closeDialog } = useDialogsContext(module);

  return (
    <Fragment>
      {isOpen && (
        <Div inset-0 fixed z-200 flex justify-center min-h-screen>
          {/*CONTAINER*/}
          <BgContainer absolute w-full h-full bg-dark-5 opacity-25 />
          <Div
            absolute
            w-full
            lg-w-3of5
            self-center
            h-full
            lg-h-screen70
            inset-0
            lg-inset-auto
            {...props}
          >
            <Div h-full>{children}</Div>
          </Div>
        </Div>
      )}
    </Fragment>
  );
};

DialogNew.propTypes = {
  module: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default memo(DialogNew);
