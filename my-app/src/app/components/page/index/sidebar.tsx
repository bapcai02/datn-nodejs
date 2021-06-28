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
                        <img src="%PUBLIC_URL%/admin/assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
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
                            <i className="zmdi zmdi-invert-colors" /> <span>Managre Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/user">
                            <i className="zmdi zmdi-format-list-bulleted" /> <span>Manager Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/tinhtp">
                            <i className="zmdi zmdi-grid" /> <span>Manager Tinh Thanh Pho</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/quanhuyen">
                            <i className="zmdi zmdi-calendar-check" /> <span>Manager Quan Huyen</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/category">
                            <i className="zmdi zmdi-face" /> <span>Manager Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/brand">
                            <i className="zmdi zmdi-lock" /> <span>Manager Brand</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/employer">
                            <i className="zmdi zmdi-account-circle" /> <span>Manager Employer</span>
                        </NavLink>
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
