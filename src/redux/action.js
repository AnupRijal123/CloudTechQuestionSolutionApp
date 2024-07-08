export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export function toggleClick(value) {
    return {
        type: TOGGLE_BUTTON,
        payload: value
    }
}

