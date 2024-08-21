import './App.css';
import AddTask from './Components/AddTask';
import TasksList from './Components/TasksList';

function App() {
  return (
    <div>
      <h1>TODO List</h1>
      <TasksList/>
      <br/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;
