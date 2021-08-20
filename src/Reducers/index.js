import { combineReducers } from "redux";
import changeBreadcumbReducer from "./changeBreadcumb";
import changeButtonReducer from "./changeButton";
import changeCabinetReducer from "./changeCabinet";
import changeCartReducer from "./changeCart";
import changeCategoryReducer from "./changeCategory";
import changeCountReducer from "./changeCount";
import changeMenuReducer from "./changeMenu";

const allReducers = combineReducers({
    categories: changeCategoryReducer,
    cart: changeCartReducer,
    cabinet: changeCabinetReducer,
    breadcrumb: changeBreadcumbReducer,
    menu: changeMenuReducer,
    button: changeButtonReducer,
    count: changeCountReducer
})
export default allReducers;