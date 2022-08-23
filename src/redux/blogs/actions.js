import { AUTHORSELECT,CATEGORYSELECT } from "./actionTypes"
export const authorSelect=(author)=>{
    return {
        type:AUTHORSELECT,
        payload:author
    }
}


export const categorySelect=(category)=>{
    return {
        type:CATEGORYSELECT,
        payload:category
    }
}