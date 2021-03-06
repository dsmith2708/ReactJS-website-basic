import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" exact to="/">Dan S</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink activeStyle={{color: "red"}} activeClassName="active" exact to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{color: "red"}} activeClassName="active" to="/page1">Page 1</NavLink></li>
                        <li><NavLink activeClassName="active" to="/page2">Page 2</NavLink></li>
                        <li><NavLink activeClassName="active" to="/page3">Page 3</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
