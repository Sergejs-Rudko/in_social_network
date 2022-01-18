import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavContainer/>
            <div className={"appContent"}>
                <Routes>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="dialogs/*"
                           element={<DialogsContainer/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="music" element={<Music/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


