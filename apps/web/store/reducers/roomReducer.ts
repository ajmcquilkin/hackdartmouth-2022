import { Actions, IRoomReducerState } from 'schema';

const initialState: IRoomReducerState = {
    rooms: {},
    currentRoom: null
};

const reducer = (state = initialState, action: Actions): IRoomReducerState => {
    if (action.status !== "SUCCESS") return state;
    
    switch (action.type) {
        case "FETCH_ROOM":
            return ({
                ...state,
                rooms: {
                    ...state.rooms,
                    [action.room.id]: action.room
                }
            });
            break;
        case "JOIN_ROOM":
            return ({
                ...state,
                rooms: {
                    ...state.rooms,
                    [action.room.id]: action.room
                },
                currentRoom: action.room
            });
            break;
        default:
            return state;
            break;
    }
};

export default reducer;
