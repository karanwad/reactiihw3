import './App.css'
import { List } from './List'

function App() {
  
   const animals = [
    {id: 1, animalName: "dog" },
    {id: 2, animalName: "cat" },
    {id: 3, animalName: "chicken" },
    {id: 4, animalName: "cow" },
    {id: 5, animalName: "sheep" },
    {id: 6, animalName: "horse" },
   ]

   return (
    <div className="App">
      <List data={animals}/>
    </div>
   );
}

export default App;