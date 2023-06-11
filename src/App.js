import './App.css';
import Slider from './components/slider/slider';
import Header from './components/header/header';
import InfosHeader from './components/infos-header/infosHeader';
import ContainerBar from './components/destaquesContainer/destaques';
import Medicamentos from './components/medicamentosContainer/medicamentos';
import Cosmeticos from  './components/cosmeticosContainer/Cosmeticos';
import Descontos from './components/descontosContainer/descontos';
import Vitaminas from './components/vitaminasContainer/Vitaminas';
import Ortopedia from './components/ortopediaContainer/ortopedia'

function App() {
  return (
    <div className="App">
      <Header />
      <InfosHeader />
      <Slider />
      <ContainerBar />
      <Medicamentos />
      <Cosmeticos />
      <Descontos />
      <Vitaminas />
      <Ortopedia />
    </div>
  );
}

export default App;
