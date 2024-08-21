import { ADDTASK, DELETETASK, DONETASK } from "./ActionTypes"

const initialState = {
    tasks : [
        { text: 'Buy tabbac', id : Math.random() , isDone:false},        
        {text: 'Buy more tabbac', id: Math.random() , isDone:false},
        {text:'Quit smoking', id:Math.random(), isDone:false}
          ]
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case ADDTASK : return {...state, tasks : [...state.tasks,{text : action.payload, id : Math.random(), isDone : false }]}
        case DELETETASK : return {...state, tasks : state.tasks.filter((el,i,t)=> el.id != action.payload)}
        case DONETASK : return {...state, tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el, isDone : !el.isDone}: el)}
        default: return state
    }
}

export default Reducer

