
//reducer have to watch for action type 'select_library' return action payload instead of null
export default ( state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default: 
            return state;
    }
}