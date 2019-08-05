const initialState  = {
    picture: "",
    display: []
}

export const displayImage = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_IMAGE":
            return {
                ...state,
                picture:action.payload
            }
        default:
             return state
    }
}

export const displayProduct = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return {
                ...state,
                display:action.payload
            }
        default: 
            return state
    }
}