import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <Sidebar state={props.state.sidebar}/>
            <div className="content">
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/> }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    );
};

export default App;
