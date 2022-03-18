import { useSelector } from "react-redux";
import { selectProfile } from "../../utils/selectors";


export default function hasRoles(roles) {
    // security if roles is undefined
    roles = roles || [];

    // if not roles
    if (roles.length === 0) return true;

    // get user profile
    const profile = useSelector(selectProfile());
    
    // If few roles are required but no profile mentioned
    if (profile === null) return false;

    // check profile granted ?
    return roles.includes(profile);
}
