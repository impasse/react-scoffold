export function init(state, action) {
    if (action.type === 'INIT') {
        return {...state, init: action.payload };
    } else {
        return state;
    }
}