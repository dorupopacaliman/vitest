import Counter from './components/Counter/Counter';
import StateForm from './components/Form/StateForm';
import NameForm from './components/NameForm/NameForm';
import UserList from './components/UserList/UserList';
import './styles.css';

function App() {
  return (
    <>
      <Counter />
      <br />
      <NameForm onSubmit={alert} />
      <UserList />
      <StateForm onSubmit={() => alert('Success')} />
    </>
  );
}

export default App;
