import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import PersonCardsProvider from './store/PersonCardsProvider';
import SysRoutes from './SysRoutes';
import './App.css';
import UsersProvider from './components/UserProvider/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsersProvider>
        <Header/>
        <PersonCardsProvider>
          <SysRoutes/>
        </PersonCardsProvider>
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
