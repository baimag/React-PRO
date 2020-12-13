import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/action";

function Alb(props) {
    const dispatch = useDispatch()
    const nendleSelectedAlbum = () => {
        dispatch(selectAlbum(props.alb.id))
    }
    return(
        <li onClick={nendleSelectedAlbum} className="Alb">
            {props.alb.title}
        </li>
    )
}
export default Alb;