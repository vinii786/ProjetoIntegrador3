import './App.css';
import Slider from './components/slider/slider';
import Header from './components/header/header';
import InfosHeader from './components/infos-header/infosHeader';
import ContainerBar from './components/destaques/destaques';
import Medicamentos from './components/medicamentos/medicamentos';


function App() {
  return (
    <div className="App">
      <Header />
      <InfosHeader />
      <Slider />
      <ContainerBar />
      <Medicamentos />
    </div>
  );
}

export default App;
