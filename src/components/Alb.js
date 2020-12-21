import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/action";
import {Link} from "react-router-dom";

function Alb(props) {
    const selectedAlbum = useSelector(state=> state.albums.selectedUserId)


    return(
        <li className={`Alb ${selectedAlbum === props.alb.id ? "active" : ""}`}>
            <Link to={`/${props.alb.id}`}>
                {props.alb.title}
            </Link>
        </li>
    )
}
export default Alb;