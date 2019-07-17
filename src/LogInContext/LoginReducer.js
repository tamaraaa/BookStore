
export const LOGIN = 'LOGIN'
const reducer = (state, action) => {
    let { type, payload } = action
    switch (type){
        case LOGIN :
        const ActiveUser = state.users.filter( user => {
            return user.password === payload.password && user.email === payload.email
        })
        if(ActiveUser.length){
          return { ...state, isLogedIn : true, activUser:ActiveUser[0] }
        }else{
          return  { ...state, hasError : true };
        }
         default :
        return state;
    }
}
export default reducer