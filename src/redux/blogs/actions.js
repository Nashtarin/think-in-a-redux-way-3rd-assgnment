import { AUTHORSELECT,TITLESELECT,CATEGORYSELECT } from "./actionTypes"
export const authorSelect=(author)=>{
    return {
        type:AUTHORSELECT,
        payload:author
    }
}
export const titleSelect=(title)=>{
    return {
        type:TITLESELECT,
        payload:title
    }
}

export const categorySelect=(category)=>{
    return {
        type:CATEGORYSELECT,
        payload:category
    }
}