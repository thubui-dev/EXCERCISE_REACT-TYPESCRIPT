import React, { useRef } from "react";
import { addPerson } from "../../store/features/personSlice";
import { useAppDispatch } from "../../store/store";
import "./additem.css"

const AddItem = () => {
    const name = useRef<string>("");
    const dispatch = useAppDispatch();

    return ( <div className="task">
        <label>Person Name:</label>
        <input  onChange={e=>name.current=e.target.value}/>
        <button 
        onClick={()=>dispatch(addPerson({name:name.current}))} 
        >
            Add
        </button>
    </div>
    );
};

export default AddItem;