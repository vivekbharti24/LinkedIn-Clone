import React from "react";
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from "./HeaderOption/HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";
function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () =>{
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://static-exp1.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title={"Home"} />
                <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
                <HeaderOption Icon={WorkIcon} title={"Jobs"} />
                <HeaderOption Icon={ChatIcon} title={"Messaging"} />
                <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
                <HeaderOption avatar={true} title={"me"} onClick={logoutOfApp}/>

            </div>
        </div>
    );
}

export default Header;
