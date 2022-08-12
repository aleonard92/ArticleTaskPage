import React, {memo} from 'react';
import {useDialogsContext} from '..';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Dialog = ({module, ...props}) => {
    
    const {isOpen, closeDialog} = useDialogsContext(module);
    
    return (
        <Modal open={isOpen} onClose={closeDialog} {...props}/>
    );
};

Dialog.propTypes = {
    module: PropTypes.string,
};

export default memo(Dialog);
