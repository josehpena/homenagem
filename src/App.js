import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import PersonCardsProvider from './store/PersonCardsProvider';
import SysRoutes from './SysRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <PersonCardsProvider>
          <SysRoutes/>
        </PersonCardsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
