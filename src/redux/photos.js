const initialState = {
    filter: "",
    photos: [],
    loadingPhotos: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case "load/photos/start": return {
            ...state,
            loadingPhotos: true
        }
        case "load/photos/success": return {
            ...state,
            photos: action.payload,
            loadingPhotos: false
        }
        case "filter/set": return {
            ...state,
            filter: action.payload
        }
        default:
            return state
    }
}