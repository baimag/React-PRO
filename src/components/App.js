import Photos from "./Photos";
import React, {useEffect} from "react";
import Album from "./Album";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/action";
import { Route } from "react-router-dom";

function App() {
    const loadingAlbums = useSelector(state => state.albums.loadingAlbums)
    const loadingPhotos = useSelector(state => state.photos.loadingPhotos)

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadAlbums());
        dispatch(loadPhotos());
    },[])
    if (loadingAlbums || loadingPhotos){
        return (
            <div>
                идет загрузка
            </div>
        )
    }
    return(
        <div className="main">
            <Album/>
            <Route path="/:id">
              <Photos/>
            </Route>
        </div>
    )
}
export default App;
