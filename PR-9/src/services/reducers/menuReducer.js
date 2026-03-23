const initialState = {
    menus: JSON.parse(localStorage.getItem("Menus")) || [],
    menu: null,
    loading: false,
    error: ""
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MENU":
            let data = JSON.parse(localStorage.getItem("Menus")) || [];
            data.push(action.payload);
            localStorage.setItem("Menus", JSON.stringify(data));
            return {
                ...state,
                menus: [...state.menus, action.payload]
            }

        case "GET_ALL_MENU":
            let DATA = JSON.parse(localStorage.getItem("Menus")) || [];
            return {
                ...state,
                menus: DATA
            }

        case "DELETE_MENU":
            let deleteMenu = JSON.parse(localStorage.getItem("Menus")) || [];
            deleteMenu = deleteMenu.filter(menu => menu.id != action.payload)
            localStorage.setItem("Menus", JSON.stringify(deleteMenu));
            return {
                ...state,
                menus: deleteMenu
            }

        case "GET_MENU":
            let getMenu = JSON.parse(localStorage.getItem("Menus")) || [];
            getMenu = getMenu.find(menu => menu.id == action.payload)
            return {
                ...state,
                menu: getMenu
            }

        case "UPDATE_MENU":
            let updateMenu = JSON.parse(localStorage.getItem("Menus"));
            let updatedMenu = updateMenu.map(menu => {
                if (menu.id == action.payload.id)
                    return action.payload
                else
                    return menu
            })

            localStorage.setItem("Menus", JSON.stringify(updatedMenu));
            return {
                ...state,
                menus: updatedMenu,
                menu: null
            }

        default:
            return state;
    }
}