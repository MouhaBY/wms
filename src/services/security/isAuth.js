import { useSelector } from "react-redux";
import { selectToken } from "../../utils/selectors";

export default function isAuth(){
    const token = useSelector(selectToken());
    if (token) return true;
    else return false;
};