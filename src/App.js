import logo from '../src/components/img/logo.png';
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Come on, let's make a pizza!!!</h1>
      </header>
    </div>
  );
};
