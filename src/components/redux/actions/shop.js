import axios from "axios";

export const displayPicture = payload => dispatch => {
  axios
    .get(`http://bowwowmeow-api.herokuapp.com/shop/find/${payload}`)
    .then(res => dispatch({
        type:"FETCH_IMAGE",
        payload: res.data.imagePath
    },
    console.log(res.data.imagePath)
    ))
    .catch(err => console.log(err)
    )
}

// export const displayProduct = payload => dispatch => {
//     axios
//         .get(`${bowwowmeow-api.herokuapp.com/shop/shop}/${payload}`)
//         .then(res => dispatch({
//             type:"FETCH_PRODUCT",
//             payload: res.data.title
//         },
//         console.log(res.data.title)
//         ))
//         .catch(err => console.log(err))
// }
