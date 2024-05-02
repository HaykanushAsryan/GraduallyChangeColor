import React, { useEffect, useState } from "react";
import style from "./studio.module.css"
import { useDispatch, useSelector } from "react-redux";
import { Popup } from "../popup/Popup";
import { getData, addOrder, postData, studioDragDrop } from "../studio/studioSlice";
import { ReactSVG } from "react-svg";
import Subcategory from "../subCategory/Subcategory";


 const Studio = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState()

    useEffect(() => {
        dispatch(getData())


    }, [])

    const studio = useSelector(state => state.studio.studio)
    const [img, setImg] = useState('')
    const [newColor, setNewColor] = useState()
    const [value, setValue] = useState('')
    const [subcategory, setSubcategory] = useState(false)
    const arr = []
    studio?.forEach((obj) => {
        arr.push(obj.color)
    });

    const [cardList, setCardList] = useState(studio)
    console.log(cardList, "cardlist");

    const MoveableItem = ({ name }) => {
        const [isDragging, setIsDragging] = useState(false);
      
        const dragStart = () => setIsDragging(true);
        const dragEnd = () => setIsDragging(false);
      
        return (
          <div
            draggable="true"
            onDragEnd={dragEnd}
            onDragStart={dragStart}
            
          >
            {/* {name} */}
          </div>
        );
      };
     
       
        const [draggedItem, setDraggedItem] = useState(null);
      
        const dragStart = index => {
          setDraggedItem(studio[index]);
 }
        
      
        const dragOver = (e, index) => {
          const updatingList = studio.filter(elem => elem !== draggedItem);
          // insert draggedItem where we are in the list
          updatingList.splice(index, 0, draggedItem);
          // update state
          dispatch(studioDragDrop(updatingList));
          
        };


    return (
        <div className={style.studio} style={{ backgroundColor: "#545662" }}>
            <div className={style.processes}>
                <p className={style.title}>Processes</p>
                <div className={style.section}>
                    {
                        open ? <Popup
                            img={img}
                            value={value}
                            newColor={newColor}
                            setImg={setImg}
                            setValue={setValue}
                            setNewColor={setNewColor}
                        /> : null

                    }
                    {

                        studio?.map(({ id, img, title, color },index) => {


                            return (img && color && title ?

                                <div key={id} onDragOver={e => dragOver(e, index)} >
                                    <div    
                                    id={index}
                                    draggable="true"
                                    onDragStart={() => dragStart(index)}
                                    onDragEnd={() => setDraggedItem(null)}>

                                    <ReactSVG src={img} style={{ stroke: color, width: "50px", height: "50px" }} />
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: `1px solid ${color}`, backgroundColor: color, boxShadow: clicked === id ? `0px 0px 5px 5px ${color}` : null }} onClick={() => {
                                            setClicked(id)
                                            setSubcategory(true)

                                        }}></div>

                                        <div style={{ width: "100px", height: "5px", background: index!==arr.length-1 ?`linear-gradient(to right, ${arr[index]}, ${arr[index+1]})` : `linear-gradient(to right, ${arr[index]}, green)` }}></div>
                                    </div>
                                    <p>{title}</p>
                                    </div >
                                    <MoveableItem
                                      key={studio.name}
                                      index={index}
                                      name={studio.name}
                                    />
                                </div>
                                : null
                            )
                    


                        })
                    }
                    <div style={{ marginTop: "15px", cursor: "pointer", color: "white", backgroundColor: "green", width: "23px", height: "23px", borderRadius: "50%", fontSize: "18px", textAlign: "center" }} onClick={(e) => {
                        setOpen(!open)
                        setImg("")
                        setNewColor("")
                        setValue("")



                        if (img && newColor && value) {

                            dispatch(postData({

                                img: img,
                                title: value,
                                color: newColor,
                                order:studio.length+1
                            })).then(() => {
                                dispatch(getData())
                            })
                        }
                        else {
                            console.log(null)
                        }
                    }
                    }
                    >
                        {open ? "✓" : "+"}

                    </div>


                </div>
            </div>
            <hr className={style.hr} />
            <div style={{ height: "300px", width: "100%", display: "flex", alignItems: "center" }}>
                {
                    subcategory ? <Subcategory /> : null
                }
            </div>
        </div>
    )
            }
export default Studio



