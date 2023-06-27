import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import PersonCardsProvider from './store/PersonCardsProvider';
import SysRoutes from './SysRoutes';
import UsersProvider from './components/UserProvider/UserProvider';
import Footer from './components/Footer/Footer';
import ContactProvider from './store/ContactProvider';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsersProvider>
        <Header/>
        <PersonCardsProvider>
        <ContactProvider>
          <SysRoutes/>
        </ContactProvider>
        </PersonCardsProvider>
        <Footer/>
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
