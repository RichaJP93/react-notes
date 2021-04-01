import './App.css';
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import data from './data';

const App = () => {
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <AddNote />
      <NoteList notes={data}/>
    </div>
  );
}

export default App;
