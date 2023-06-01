import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';


function App() {

  
 
  return (
    <div className="App">
     
      <NewExpenses></NewExpenses>
      <Expenses/>
    </div>
  );
}

export default App;
