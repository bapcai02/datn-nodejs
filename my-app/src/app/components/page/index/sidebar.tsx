import  React  from 'react';
import { 
    BrowserRouter,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';


function SideBar(){
    return (
        <div>
            <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
                <div className="brand-logo">
                    <a href="index.html">
                        <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                        <h5 className="logo-text">Dashtreme Admin</h5>
                    </a>
                </div>
                <ul className="sidebar-menu do-nicescrol">
                    <li className="sidebar-header">MAIN NAVIGATION</li>
                    <li>
                        <a href="index.html">
                        <i className="zmdi zmdi-view-dashboard" /> <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <NavLink to = "/product">
                            <i className="zmdi zmdi-invert-colors" /> <span>Manage Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="forms.html">
                        <i className="zmdi zmdi-format-list-bulleted" /> <span>Forms</span>
                        </a>
                    </li>
                    <li>
                        <a href="tables.html">
                        <i className="zmdi zmdi-grid" /> <span>Tables</span>
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html">
                        <i className="zmdi zmdi-calendar-check" /> <span>Calendar</span>
                        <small className="badge float-right badge-light">New</small>
                        </a>
                    </li>
                    <li>
                        <a href="profile.html">
                        <i className="zmdi zmdi-face" /> <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="login.html" target="_blank">
                        <i className="zmdi zmdi-lock" /> <span>Login</span>
                        </a>
                    </li>
                    <li>
                        <a href="register.html" target="_blank">
                        <i className="zmdi zmdi-account-circle" /> <span>Registration</span>
                        </a>
                    </li>
                    <li className="sidebar-header">LABELS</li>
                    <li><a href="javaScript:void();"><i className="zmdi zmdi-coffee text-danger" /> <span>Important</span></a></li>
                    <li><a href="javaScript:void();"><i className="zmdi zmdi-chart-donut text-success" /> <span>Warning</span></a></li>
                    <li><a href="javaScript:void();"><i className="zmdi zmdi-share text-info" /> <span>Information</span></a></li>
                </ul>
            </div>
        </div>
    )
    
}
export default SideBar;
