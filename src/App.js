import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-screen h-full flex flex-col gap-6">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
