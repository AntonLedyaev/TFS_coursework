
export const userName = (state) => state.user.user.email ? state.user.user.email.split('@')[0] : ''