import React from 'react'

function Navb(props) {
    return (
        <div>
            <ul className="menu-navbar">

            {props.menu.map(el => <li className="menu-navbar-li">{el.title}
            {!el.submenu ? null : <ul className="dropdown">
                {el.submenu.map(el => <li className="dropdown-item">{el}</li>)}
            </ul>}
            </li>)}      
            </ul>
        </div>
    )
}
export default Navb;

