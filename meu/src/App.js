import './App.css';
import Slider from './components/slider/slider';
import Header from './components/header/header';
import InfosHeader from './components/infos-header/infosHeader';
import ContainerBar from './components/container-bar/containerBar';


function App() {
  return (
    <div className="App">
      <Header />
      <InfosHeader />
      <Slider />
      <ContainerBar />
    </div>
  );
}

export default App;
