import React, { useState } from "react";
import { MenuArr } from "../navigation/Navigation";
import { Link } from "react-router-dom";
import style from "./header.module.css"

const Header = () => {

    const [activePage, setActivePage] = useState()
    return (
        <div className={style.header}>
            <ul className={style.navigation}>
                {
                    MenuArr.map(({id, name, path, active}) => {
                        return (
                            <li key={id}  className={style.list} style={{ backgroundColor: activePage === id  ? "#545662" : null}}>
                                <Link to={path} style={{textDecoration:"none", color:"white",}} onClick={()=>{
                                setActivePage(id)
                            }}>
                                    <p>{name}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Header