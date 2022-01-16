import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import {DialogItemType, FriendType, MessageType, PostType, UnionActionType} from "./fake_redux/state";


type AppPropsType = {
    state: {
        profilePage: {
            posts: PostType[],
            postText: string
        }
        dialogsPage: {
            dialogsItems: DialogItemType[]
            messageData: MessageType[]
            newMessageText: string
        },
        sideBar: {
            friends: FriendType[]
        }
    }
    dispatch: (action: UnionActionType) => void
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Nav state={props.state.sideBar}/>
            <div className={"appContent"}>
                <Routes>
                    <Route path="profile" element={<Profile state={props.state.profilePage}
                                                            dispatch={props.dispatch}/>}/>
                    <Route path="dialogs/*"
                           element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="music" element={<Music/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
