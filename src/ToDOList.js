import ToDoItem from "./ToDoitem";

const ToDoList = ({tasks,handleClear,deleteHandler}) => {
    return ( 
        <div className="tasksList">
            {tasks.map(((element,index)=>{
                return(
                    <ToDoItem element={element} key={index} deleteHandler ={deleteHandler}/>
                )
            }))}
            {tasks[0] && <span className="clear" onClick={handleClear}>clear all</span>}
        </div>
    );
}
 
export default ToDoList;