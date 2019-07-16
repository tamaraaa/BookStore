
export const LOGIN = 'LOGIN'
const reducer = (state, action) => {
    console.log(action.type)
    switch ( action.type){
        case LOGIN :
        const ActiveUser = state.users.filter( user => {
            return user.password === action.payload.password && user.email === action.payload.email
        })
        if(ActiveUser.length){
            return {...state,isLogedIn : true,activUser:ActiveUser[0]}
        }else{
            console.log('error')
        }
         default :
        return state
    }

}
export default reducer