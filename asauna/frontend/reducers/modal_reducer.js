import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = {
    modalType: null,
    isOpen: false
}

export default function modalReducer(state = defaultState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, isOpen: true, modalType: action.modalType};
        case CLOSE_MODAL:
            return {...state, isOpen: false, modalType: null};
        default:
            return state;
    }
}
