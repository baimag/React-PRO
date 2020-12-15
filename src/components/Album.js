import {useSelector} from "react-redux";
import Alb from "./Alb";

function Album() {
    const albums = useSelector(state => state.albums.albums)
    return(
        <div className="albums">
            <ul>
                {albums.map(alb => {
                    return (
                        <Alb alb={alb} key={alb.id}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Album;