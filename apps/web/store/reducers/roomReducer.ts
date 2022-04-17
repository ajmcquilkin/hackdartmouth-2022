import { Actions, IRoomReducerState } from 'schema';

const initialState: IRoomReducerState = {
    rooms: {},
    currentRoom: null
};

const reducer = (state = initialState, action: Actions): IRoomReducerState => {
    if (action.status !== "SUCCESS") return state;

    switch (action.type) {
        case "VOTING_DONE":
            return ({
                ...state,
                currentRoom: state.currentRoom ? {
                    ...state.currentRoom,
                    results: true,
                } : null
            });
        case "USER_DONE":
            return ({
                ...state,
                currentRoom: state.currentRoom ? {
                    ...state.currentRoom,
                    done: true,
                } : null
            });
        case "HOST_START":
            return ({
                ...state,
                currentRoom: state.currentRoom ? {
                    ...state.currentRoom,
                    started: true
                } : null
            });
        case "FETCH_ROOM":
            // 59c0ab38-032f-40a5-9d23-45dbacfddb8e
            return ({
                ...state,
                rooms: {
                    ...state.rooms,
                    [action.room.id]: action.room
                }
            });
        case "CREATE_ROOM":
        case "JOIN_ROOM":
            return ({
                ...state,
                currentRoom: action.room,
                rooms: {
                    ...state.rooms,
                    [action.room.id]: action.room
                }
            });
        default:
            return state;
    }
};

export default reducer;
