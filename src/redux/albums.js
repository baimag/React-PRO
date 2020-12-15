const initialState = {
    selectedUserId: null,
    albums: [],
    loadingAlbums: false,
}


export default (state = initialState, action) => {
    switch (action.type){
        case "load/alb/start": return {
            ...state,
            loadingAlbums: true
        }
        case "load/alb/success": return {
            ...state,
            albums: action.payload,
            loadingAlbums: false
        }
        case "album/select": return {
            ...state,
            selectedUserId: action.payload
        }
        case 'filter/set':
            return {
                ...state,
                filter: action.payload,
            }
        default:
            return state
    }
}