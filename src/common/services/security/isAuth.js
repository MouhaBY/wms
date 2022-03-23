import { useSelector } from "react-redux";
import { selectToken } from "../../store/selectors";


export default function isAuth(){
    const token = useSelector(selectToken());
    if (token) return true;
    else return false;
}
