import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="home">Dan S</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <NavLink activeClassName="active"><a >Home</a></NavLink>
                        <NavLink activeClassName="active"><a>Page 1</a></NavLink>
                        <NavLink activeClassName="active"><a>Page 2</a></NavLink>
                        <NavLink activeClassName="active"><a>Page 3</a></NavLink>
                    </ul>
                </div>
            </div>
        )
    }
}
