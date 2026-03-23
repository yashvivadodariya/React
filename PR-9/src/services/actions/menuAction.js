export const addMenu = (data) =>{
    return {
        type: "ADD_MENU",
        payload: data
    }
}

export const getAllMenu = () =>{
    return {
        type: "GET_ALL_MENU",
    }
}

export const deleteMenu = (id) =>{
    return {
        type: "DELETE_MENU",
        payload: id
    }
}

export const getMenu = (id) =>{
    return {
        type: "GET_MENU",
        payload: id
    }
}

export const updateMenu = (data) =>{
    return {
        type: "UPDATE_MENU",
        payload: data
    }
}