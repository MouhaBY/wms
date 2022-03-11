export const LOGIN = "Login";
export const LOGOUT = "Logout";

const initialState = {
    token :null,
    userData : null
}

export const loginAction = (credentials) => (
    {
        type: LOGIN,
        payload : credentials
    }
)

export const logoutAction = () =>(
    {
        type : LOGOUT
    }
)

export function loginReducer (state = initialState, action){
    if (action.type === LOGIN){
        state = action.payload
        return state
    }
    else if (action.type === LOGOUT){
        state = initialState
        return state
    }
    else return state
}
