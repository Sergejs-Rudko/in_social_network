import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sideBar : sideBarReducer,
    usersPage : usersReducer,
    auth : authReducer
})

export let reduxStore = createStore(rootReducer)

//TYPES ________________________________________________________________________________________________________________
export type StoreType = typeof reduxStore
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = reduxStore;


