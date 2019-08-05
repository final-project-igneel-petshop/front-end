import { combineReducers } from "redux";
import {displayImage, displayProduct} from "./shop";

const rootReducers = combineReducers({
  displayImage, displayProduct
});

export default rootReducers;
