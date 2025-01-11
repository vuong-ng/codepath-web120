import React from "react";
import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import heart_unfilled from "../assets/heart_unfilled.svg"
import { Link } from 'react-router-dom';
import home from "../assets/home.svg";
import add from "../assets/add.svg"


const MenuBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleMenuBar = () => {
        setCollapsed(!collapsed);
    }
    return (
        <div id="header">
            <Sidebar collapsed={collapsed}>
                <div>
                    <img src={home} />
                </div>
                    <Menu>
                        <MenuItem
                            icon={<img src={heart_unfilled} />}
                            component={<Link to="/" />}>
                            {" "}Stylegram{" "}
                        </MenuItem>
                        <MenuItem
                            icon={<img src={add} />}
                            component={<Link to="/" />}>
                            {" "}Create new post{" "}
                        </MenuItem>
                    </Menu>
            </Sidebar>
        </div>
    );
}

export default MenuBar;