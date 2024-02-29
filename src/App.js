import './App.css';
import { Footer, Header } from './components';
import { ScrollToTop } from './components/ScrollToTop';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <AllRoutes />
      <Footer/>
    </>
    
  );
}

export default App;
