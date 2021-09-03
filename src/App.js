import { useState} from 'react'
import ToDoList from './ToDOList';

function App() {
  const [list,setList] = useState([]);
  const [task,setTask] = useState('');
  const [alert,setAlert] = useState(
    {show : false,msg:"",type:""}
  )

  //handlers
  const handleClear = () => {
    setList([]);
  }
  const handleSubmit = () => {   
    if(!task){
      setAlert({
        show:true,
        msg:"Enter a task",
        type:"danger"
      })
    }
    else if(list.includes(task)){
      setTask('');
      setAlert({
        show:true,
        msg:"this task already exist",
        type:"danger"
      })
    }
    else{
      setAlert({
        show:true,
        msg:"Task added",
        type:""
      })
      setList([...list,task]);
      setTask('')
    }
    setTimeout(()=>{
      setAlert({
        show:false,
      })
    },2000)
  }
  const deleteHandler = (item)=>{
    setList(list.filter((element)=>{return element !== item}))
    console.log(list)
  }
  return (
    <div className="App">
      <main>
        <h1>To Do</h1>
        <div className="header">
            {alert.show && <div className={alert.type === "danger" ?  "danger" : "alert"}>
                {alert.msg}
              </div>}
            <form onSubmit={(e)=>{
                  e.preventDefault();
                  handleSubmit()}}>
                <input type="text"
                        value={task}
                        onChange={(e)=>{setTask(e.target.value);}} />
                <button className="submit" type="submit">
                  Submit
                </button>
            </form>
        </div>
        <ToDoList tasks = {list} handleClear = {handleClear} deleteHandler={deleteHandler} />
      </main>
    </div>
  );
}

export default App;
