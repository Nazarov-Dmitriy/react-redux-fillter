import {
    CHANGE_VALUE,
    ADD_INPUT_VALUE,
    REMOVE_ITEM,
    SET_EDIT_ITEM,
    RESET_FORM,
    SERVISE_SEACH
} from "./action";

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export function changeValue(name, value) {
    return {
        type: CHANGE_VALUE,
        payload: {
            name,
            value
        }
    }
}

export function addInputValue(name, price, iD) {
    return {
        type: ADD_INPUT_VALUE,
        payload: {
            name,
            price,
            iD,
        }
    }
}

export function resetForm() {
    return {
        type: RESET_FORM,
    }
}

export function setEditItem(name, value, id) {
    return {
        type: SET_EDIT_ITEM,
        payload: {
            id,
            name,
            value,
        }
    }
}

export function serviseSeach(arr,seachString) {
    return {
        type: SERVISE_SEACH,
        payload: {
            arr,
            seachString,
        }
    }
}