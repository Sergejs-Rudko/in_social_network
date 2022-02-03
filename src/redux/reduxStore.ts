import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sideBar : sideBarReducer,
    usersPage : usersReducer,
    auth : authReducer
})

export let reduxStore = createStore(rootReducer,applyMiddleware(thunk))

//TYPES ________________________________________________________________________________________________________________
export type StoreType = typeof reduxStore
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = reduxStore;


