export const TOGGLEDRAWER = "ToggleDrawer";

export const toggleDrawerAction = () => (
    {
        type : TOGGLEDRAWER
    }
)

export function drawerReducer (state = true, action){
    if (action.type === TOGGLEDRAWER){
        state = !state
        return state
    }
    else return state
}
