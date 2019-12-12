import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="header-bg">
                <header id="topnav">
                    <div className="topbar-main">
                        <div className="container-fluid">
                            {/* Logo*/}
                            <div>
                                <a href="/" className="logo">
                                    <span className="logo-light">
                                        <i className="mdi mdi-camera-control" /> MSt
          </span>
                                </a>
                            </div>
                            {/* End Logo*/}
                            <div className="menu-extras topbar-custom navbar p-0">
                                <ul className="list-inline d-none d-lg-block mb-0">
                                    <li className="hide-phone app-search float-left">
                                        <form role="search" className="app-search">
                                            <div className="form-group mb-0">
                                                <input type="text" className="form-control" placeholder="Search.." />
                                                <button type="submit"><i className="fa fa-search" /></button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                                <ul className="navbar-right ml-auto list-inline float-right mb-0">

                                    {/* notification */}
                                 
                                    <li className="dropdown notification-list list-inline-item">
                                        <div className="dropdown notification-list nav-pro-img">
                                            <Link className="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" to="#"  role="button" aria-haspopup="false" aria-expanded="false">
                                                <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                                {/* item*/}
                                                <Link className="dropdown-item" to="#"><i className="mdi mdi-account-circle" /> Profile</Link>
                                                <Link className="dropdown-item text-danger" to="/logout"><i className="mdi mdi-power text-danger" /> Logout</Link>
                                            </div>
                                        </div>
                                    </li>
                                   
                                </ul>
                            </div>
                            {/* end menu-extras */}
                            <div className="clearfix" />
                        </div>
                        {/* end container */}
                    </div>
                    {/* end topbar-main */}
                    {/* MENU Start */}
                    <div className="navbar-custom">
                        <div className="container-fluid">
                            <div id="navigation">
                                {/* Navigation Menu*/}
                                <ul className="navigation-menu">
                                    <li className="has-submenu">
                                        <Link to="/"><i className="icon-accelerator" /> Điểm danh</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#"><i className="icon-paper-sheet" />Thống kê<i className="mdi mdi-chevron-down mdi-drop" /></Link>
                                        <ul className="submenu">
                                            <li className="has-submenu">
                                                <Link to="/qr">Th</Link>
                                                
                                            </li>
                                            <li>
                                                <Link to="calendar.html">Calendar </Link>
                                            </li>
                                            <li className="has-submenu">
                                                <Link to="#">Forms</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#"><i className="icon-profile-add" /> Thêm Sinh viên</Link>
                                    </li>
                                </ul>
                                {/* End navigation menu */}
                            </div>
                            {/* end #navigation */}
                        </div>
                        {/* end container */}
                    </div>
                    {/* end navbar-custom */}
                </header>
            </div>


        );
    }
}

export default Header;