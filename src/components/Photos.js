import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";
import {setFilterText} from "../redux/action";

function Photos() {
    const photos = useSelector(state => state.photos.photos)
    const selectedPhotoId = useSelector(state => state.albums.selectedUserId)
    const filter = useSelector(state => state.photos.filter)
    const dispatch = useDispatch()
    const filteredPhotos = photos
        .filter(photo => photo.id === selectedPhotoId)
        .filter(photo => photo.title.indexOf(filter) > -1)


    if (selectedPhotoId === null){
        return (
            <div className="no-photo">
                ⬅😯 Выберите фото в списке
            </div>
        )
    }
    const handleChangeFilter = (event) => {
        dispatch(setFilterText(event.target.value))
    }
    return(
        <div className="photos">
            <div className="filter">
                <input
                    type="text"
                    value={filter}
                    placeholder="Фильтрация по тексту"
                    onChange={handleChangeFilter}/>
            </div>
            <ul>
                {filteredPhotos.map(photo => {
                    return <Photo pht={photo} key={photo.id}/>
                })}
            </ul>
        </div>
    )
}
export default Photos;