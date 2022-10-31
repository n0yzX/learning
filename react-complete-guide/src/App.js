import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 296.67, date: new Date(2022, 11, 1)},
    { id: 'e2', title: 'Car Insurance', amount: 296.67, date: new Date(2022, 11, 1)},
    { id: 'e3', title: 'Car Insurance', amount: 296.67, date: new Date(2022, 11, 1)},
    { id: 'e4', title: 'Car Insurance', amount: 296.67, date: new Date(2022, 11, 1)}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;