import React, { useEffect, useState } from "react";
import style from "./subcategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Category, UpdateCategory } from "./SubcategorySlice";
const Subcategory = () => {
    const [open, setOpen] = useState(false)
    console.log(open, "open");
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Category())
    }, [])
    const category = useSelector(state => state.category.category)

    return (
        <div className={style.subcategory}>
            <hr className={style.hr} />
            <div className={style.button} onClick={() => {
                setOpen(!open)
                // if (open === false) {
                //     dispatch(UpdateCategory({
                //          title: value
                //     })).then(() => {
                //         dispatch(Category())
                //     })
                // }

            }}>
                {open ? "✓" : "+"}

            </div>
             {
                open ? <input type="text" className={style.input} placeholder="ти" 
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
                : null
            }
            {
                category.map((id, parentId) => {

                })
            }
           


        </div>
    )
}
export default Subcategory