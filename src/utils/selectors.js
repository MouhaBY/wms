export const selectToken = () => { return (state) => state.user.token }

export const selectShowDrawer = () => { return (state) => state.showDrawer }

export const selectProfile = () => { return (state) => state.user.userData.profile}

export const selectContact = () => { return (state) => state.user.userData.contact}