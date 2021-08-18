import {createAction} from "redux-actions";

export const modalActions = {
    MODAL_OPEN_REQUEST :"Modal open request!",
    MODAL_CLOSE_REQUEST :"Modal close request!"
}

export const modalOpenRequest = createAction(modalActions.MODAL_OPEN_REQUEST);
export const modalCloseRequest = createAction(modalActions.MODAL_CLOSE_REQUEST);