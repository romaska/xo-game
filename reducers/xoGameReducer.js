let initialState = {
    boardArr: [8],
    next: "x"
};
initialState.boardArr[0] = "x";


const xoGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLAYER_CHAR":
            let nextPlayerChar = state.next === "x" ? "o" : "x";

            return Object.assign({}, state, {
                boardArr: state.boardArr[3] = "z",
                next: nextPlayerChar
            });

        default:
            return state
    }
};


export default xoGameReducer