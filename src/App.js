import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import React, {Suspense} from "react";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
//import MessagesContainer from "./Components/Messages/MessagesContainer";

const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app_wrapper">

                <HeaderContainer/>
                <Sidebar/>

                <div className="app_main">
                    <Route path="/my_page/:userId?"
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route path="/my_messages"
                           render={() => {
                               return <Suspense fallback={<div>Loading...</div>}>
                                   <MessagesContainer/>
                               </Suspense>
                           }
                           }/>

                    <Route path='/my_news'
                           render={() => <News/>}/>
                    <Route path='/my_settings'
                           render={() => <Settings/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {
    initializeApp,
})(App);
let MainApp = () => {
    return <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
        </React.StrictMode>,
    </Provider>
}
export default MainApp;
