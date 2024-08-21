import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const TasksList=()=>{
    const tasks = useSelector(state=> state.tasks)
    const [status,setStatus] = useState('all')
    return(
        <div>
            <div>
                <button onClick={()=> setStatus('all')}>All</button>
                <button onClick={()=> setStatus('done')}>Done</button>
                <button onClick={()=> setStatus('notdone')}>Not Done</button>
            </div>
            {
                status == "all" ?
                tasks.map((el,i,t)=> <CardTask el={el}/>)
                :
                status == "done" ?
                tasks.filter((el,i,t)=> el.isDone == true).map((el,i,t)=> <CardTask el={el}/>)
                :
                tasks.filter((el,i,t)=> el.isDone == false).map((el,i,t)=> <CardTask el={el}/>)
            }
          
        </div>
    )
}

export default TasksList