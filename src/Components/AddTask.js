import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const [task,setTask] = useState('')
    const dispatch = useDispatch()
    const handleAdd=()=>{
        dispatch(addTask(task))
        setTask('')
    }
    return(
        <div>
            <input value={task} onChange={(e)=>setTask(e.target.value)} type="text"/>
            <button onClick={()=> task == "" ? alert("Pas de text") : handleAdd()}>Add</button>
        </div>
    )
}

export default AddTask