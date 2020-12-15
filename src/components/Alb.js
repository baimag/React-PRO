import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/action";

function Alb(props) {
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=> state.albums.selectedUserId)
    const nendleSelectedAlbum = () => {
        dispatch(selectAlbum(props.alb.id))
    }


    return(
        <li onClick={nendleSelectedAlbum} className={`Alb ${selectedAlbum === props.alb.id ? "active" : ""}`}>
           {props.alb.title}
        </li>
    )
}
export default Alb;