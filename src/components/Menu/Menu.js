import React from "react";
import {Route,Link} from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import '../../App.css'

const menus=[
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Live Event",
        to: "/events",
        exact: true
    },
    {
        name: "Charities",
        to: "/charities",
        exact: true
    },
    {
        name: "About us",
        to: "/about",
        exact: true
    }
];

const MenuLink=({label,to,activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            axact={activeOnlyWhenExact}
            children={({match}) => {
                var active=match? "active":"";
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse mg-0">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a
                            className="navbar-brand"
                            href="/"
                        >
                            Give now
                                                            </a>
                    </div>
                    <ul className="nav navbar-nav">
                        {this.showMenus(
                            menus
                        )}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a
                                href="#signup"
                                data-toggle="modal"
                            >
                                <span className="glyphicon glyphicon-user"></span>
                                Signup
                                                                      </a>
                            <Signup />
                        </li>
                        <li>
                            <a
                                href="#login"
                                data-toggle="modal"
                            >
                                <span className="glyphicon glyphicon-log-in"></span>
                                Login
                                                                      </a>
                            <Login />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    showMenus=(menus) => {
        var result=null;
        if(menus.length>0) {
            result=menus.map((menu,index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={
                            menu.axact
                        }
                    />
                );
            });
        }
        return result;
    };
}

export default Menu;
