import React from "react";
import Production from "../mainPage/production/production";
import Studio from "../mainPage/studio/Studio";




export const MenuArr = [
    { id: Math.random(), name: "3D Studio", path:"/studio", element: <Studio/>, active: true },
    { id: Math.random(), name: "Production", path:"/production", element: <Production/>, active: false }
]