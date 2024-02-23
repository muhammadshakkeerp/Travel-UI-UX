const TOGGLE__DARKMODE = "TOGGLE__DARKMODE"

const toggleDarkMode=()=>({
    type:TOGGLE__DARKMODE
})

const initialState:{isEnabled:boolean}  = {
    isEnabled:false
}

const DarkReducer=(state=initialState , action:{type:string})=>{
    switch (action.type) {
        case TOGGLE__DARKMODE:
            return {
                ...state, isEnabled: !state.isEnabled 
            }
    
        default:
           return  state
    }
    
}

export default DarkReducer