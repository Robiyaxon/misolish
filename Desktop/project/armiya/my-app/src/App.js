import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Heder from './components/header/Heder';
import Warning from './components/warning/Warning';
// import Home from './components/home/Home';
// import Menu from './components/menu/Menu';
// import News from './components/news/News';
// import SochialMedia from './components/socialmedia/SochialMedia';

function App() {

  return (
    <div className="App">
      <Heder />
      {/* <Home /> */}
       <Card />
     {/* <Menu />
      <SochialMedia />
      <News />*/}
      <Warning/>
      <Footer/> 
    </div>
  );
}

export default App;
