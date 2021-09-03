import { useState } from "react";
const ToDoItem = ({element,deleteHandler}) => {
    const [isDone,setIsDone] = useState(false);
    return ( 
        <div className="item">
            <span className={isDone ? "text isDone":"text"}>{element}</span>
            <div className="btnContainer">
                <span className={isDone ? "done itsDone":"done"} onClick={()=>setIsDone(!isDone)}>Done</span>
                <span className="delete" 
                onClick={()=>deleteHandler(element)}>
                    Delete
                </span>
            </div>
        </div>
     );
}
export default ToDoItem;