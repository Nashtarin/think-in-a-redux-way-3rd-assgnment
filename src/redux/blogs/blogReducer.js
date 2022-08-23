import initialState from "./initialState";
import { AUTHORSELECT,TITLESELECT,CATEGORYSELECT } from "./actionTypes"

const blogReducer=(state=initialState,action)=>{
    switch (action.type) {
        case AUTHORSELECT:
            return state.filter(each=>each.author===action.payload)
        case TITLESELECT:
            return state.filter(each=>each.title.toLowerCase().search(action.payload.toLowerCase())!==-1)
        case CATEGORYSELECT:
            return state.filter(each=>each.category===action.payload)
          
    
        default:
            return state;
    }
}
export default blogReducer;