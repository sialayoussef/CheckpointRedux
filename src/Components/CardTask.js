import { useDispatch } from "react-redux"
import { deleteTask, doneTask } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h2 className={el.isDone && "sater"}>{el.text}</h2>
            <button onClick={()=> dispatch(doneTask(el.id))}>Done</button>
            <button onClick={()=> dispatch(deleteTask(el.id))}>Delete</button>
        </div>
    )
}

export default CardTask