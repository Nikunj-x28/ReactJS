import AddExpense from "./components/AddExpense";
import AddTodo from "./components/AddTodo";
import Expense from "./components/Expense";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex">
      <div>
        <h1>TODO Tracker</h1>
        <AddTodo/>
        <Todos/>
      </div>
      <div>
        <h1>Expense Tracker</h1>
        <AddExpense/>
        <Expense/>
      </div>
    </div>
  );
}

export default App;
