export const loadAlbums = () => {
    return dispatch  => {
        dispatch({type: "load/alb/start"})
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response)=> response.json())
            .then((json => {
                dispatch({
                    type:"load/alb/success",
                    payload: json
                })
            }))
    }
}


export const loadPhotos = () => {
    return dispatch  => {
        dispatch({type: "load/photos/start"})
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response)=> response.json())
            .then((json => {
                dispatch({
                    type:"load/photos/success",
                    payload: json
                })
            }))
    }
}


export const selectAlbum = (userId) => {
    return {
        type: "album/select",
        payload: userId
    }
}


export const setFilterText = (text) => {
    return {
        type: "filter/set",
        payload: text
    }
}