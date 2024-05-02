import React, { useEffect, useState } from "react";
import style from './popup.module.css'
import { ImageUpload } from "../imageUpload/ImageUpload";
import { useDispatch, useSelector } from "react-redux";



export const Popup = ({
    img,setImg,newColor,setNewColor,value,setValue
}) => {
  
    const [upload, setUpload] = useState(false)

    const [updatedValue, setUpdatedValue] = useState('')
    const dispatch = useDispatch()

    const handeInputChange = (event) => {
        
        setValue(event.target.value)
        
    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setUpdatedValue(value)
            
        }
    }

    const studio = useSelector(state => state.studio.studio)
    const colors = ["#000000", "#c0c0c0", "#c0c0c0", "#ff618b", "#FFA07A", '#FFFACD', "#ff0000", "#ef9312", "#e6eb39", "#e6eb39", "#4FFFB0", '#ACE1AF', "#3d85c6", "#00308F", "#6CB4EE", "#c63dba", '#452c63']
  
    return (
        <div style={{ position: "relative" }}>
            <div className={style.popup}>
                <div style={{ width: "28px", height: "28px", borderRadius: "2px", background: "#FFFFFF4D", color: "orange", fontSize: "18px", textAlign: "center", cursor: "pointer" }} onClick={() => {
                    setUpload(true)

                }}>
                    +
                </div>
                <ImageUpload img={img} setImg={setImg} />

                <div>
                    <span>Про|</span>
                    <input type="text" style={{ background: "transparent", width: "100px", height: '22px', border: "none", color: "white" }} 
                    onChange={handeInputChange}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div style={{ width: "12px", height: "12px", borderRadius: "2px", background: newColor }}></div>
            </div>
            <div style={{ width: "117px", height: "64px", background: "white", display: "flex", flexWrap: "wrap", position: 'absolute', left: "100px", top: "35px", borderRadius: "2px" }}>
                {
                    colors.map((color) => {
                        return (
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: color, margin: "1px", cursor: "pointer" }} onClick={() => {
                                setNewColor(color)
                            }}></div>
                        )
                    })
                }
            </div>
            {/* {
                value && img.length !== 0 && newColor ? 
                    setTimeout(() => {
                
                        dispatch(postData({
                            id: Math.round(Math.random()),
                            img: img,
                            title: value,
                            color: newColor
                            
                        })).then(()=>{
                            setTimeout(() => {
                                dispatch(Data)
                            }, 2000)
                        })
                        
                    }, 3000)
                : null
            } */}
       
        </div>
    )
}
