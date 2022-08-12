import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const DialogsContext = createContext();


function DialogsContextProvider(props) {
    const [dialog, setDialog] = useState({isOpen: false});

    const openDialog = useCallback((dialog, payload) => {
        setDialog({isOpen: true, dialog, payload});
    }, []);

    const closeDialog = useCallback(() => {
        setDialog({isOpen: false, dialog: null});
    }, []);


    return (
        <DialogsContext.Provider value={{...dialog, openDialog, closeDialog}} {...props}/>
    );
}

function useDialogsContext(dialog) {
    const context = useContext(DialogsContext);
    if (context === undefined) {
        throw new Error('useDialogContext must be used within a DialogsContextProvider');
    }

    const {openDialog, closeDialog} = useMemo(() => {
        const openDialog = (payload) => context.openDialog(dialog, payload);
        const closeDialog = () => context.closeDialog();
        return {openDialog, closeDialog};
    }, [context.openDialog, context.closeDialog]);

    const isOpen = context.isOpen && context.dialog === dialog;
    return {openDialog, closeDialog, isOpen, payload: isOpen ? context.payload : null};
}

export {DialogsContextProvider, useDialogsContext};
