
import './App.css';
import Studentable from './components/Studentable';
import {students} from './data/StudentsDb'

function App() {
  return (
    <div>
   <Studentable students={students}/>
   
    </div>
  );
}

export default App;
