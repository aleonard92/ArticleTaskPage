import React, {memo, Fragment} from "react";
import styled from "styled-components";
import {Div} from "d-relax-components";
import {Close} from "styled-icons/material/Close";
import PropTypes from "prop-types";

const BgContainer = styled(Div)`
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
`;

const Modal = ({open, onClose, children, ...props}) => {
    return (<Fragment>
            {open && <Div inset-0 fixed z-full flex justify-center min-h-screen>
                {/*CONTAINER*/}
                <BgContainer absolute w-full h-full bg-dark-5 opacity-25/>
                <Div absolute w-full lg-w-3of5 self-center h-full lg-h-screen70 inset-auto {...props}>
                    <Div bg-white py-3 rounded h-full overflow-hidden w-full>
                        <Div onClick={onClose} cursor-pointer absolute top-0 right-0 m-2>
                            <Close width="16" height="16"/>
                        </Div>
                        <Div h-full>
                            {children}
                        </Div>
                    </Div>
                </Div>
            </Div>}
        </Fragment>
    )
};


Modal.propTypes = {
    open: PropTypes.any,
    onClose: PropTypes.func,
    children: PropTypes.any
};

export default memo(Modal)
