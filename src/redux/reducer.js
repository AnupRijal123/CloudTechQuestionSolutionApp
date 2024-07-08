import { TOGGLE_BUTTON } from './action.js';
const initialToggleButtonState = {
    toggleButtonClicked: null,
}

export const reducer = (state = initialToggleButtonState, action) => {
    switch (action.type) {
        case TOGGLE_BUTTON: return {
            toggleButtonClicked: action.payload
        }
        default: return state;
    }
}