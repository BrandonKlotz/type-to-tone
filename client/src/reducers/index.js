const INITIAL_STATE = {
    loading: false,
    isModalOpen: false,
    disabledButton: true,
    displayResults: {},
    text: "",
    value: "",
    modal: "",
    stillNegative: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                displayResults: action.displayResults,
                isTextAnalyzed: true,
                stillNegative: false
            });
        case "REQUEST_RESULTS":
            return Object.assign({}, state, {
                loading: true,
                value: action.inputData.value
            });
        case "HOME_SCREEN":
            return INITIAL_STATE;
        case "STILL_NEGATIVE":
            return Object.assign({}, state, {
                stillNegative: true
            });
        default:
            return state;
    }
};
