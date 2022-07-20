import {ActionTypes} from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCT,
        payload : products,
    }
}
export const selectedProducts = (products) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products,
    }
}