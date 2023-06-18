import './App.css';
import Slider from './components/slider/slider';
import Header from './components/header/header';
import InfosHeader from './components/infos-header/infosHeader';
import ContainerBar from './components/produtoContainer/destaques';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
    //http://localhost:3000/static/produtos.json https://projeto-integrador3.vercel.app/static/produtos.json
    useEffect(() => {
      fetch('https://projeto-integrador3.vercel.app/static/produtos.json').then((Response) => Response.json())
          .then((response) => {
            const data = {
              destaque: [],
              vitaminas: [],
              ortopedia: [],
              cosmeticos: [],
              medicamentos: []
            }

            response.forEach(produto => {
              if(produto.type === "destaque") {
                data.destaque.push(produto)
              }

              if(produto.type === "vitaminas") {
                data.vitaminas.push(produto)
              }

              if(produto.type === "ortopedia") {
                data.ortopedia.push(produto)
              }

              if(produto.type === "medicamentos") {
                data.medicamentos.push(produto)
              }

              if(produto.type === "cosmeticos") {
                data.cosmeticos.push(produto)
              }
            });
            
            setData(data)
          });
  }, [])


  return (
    <div className="App">
      <Header />
      <InfosHeader />
      <Slider />

      <ContainerBar data={data.destaque?.slice(0, 3)} title="Destaque" />
      <ContainerBar data={data.vitaminas?.slice(0, 3)} title="Vitaminas" />
      <ContainerBar data={data.cosmeticos?.slice(0, 3)} title="Cosméticos" />
      <ContainerBar data={data.medicamentos?.slice(0, 3)} title="Medicamentos"  />
      <ContainerBar data={data.ortopedia?.slice(0, 3)} title="Ortopedia" />
    </div>
  );
}

export default App;
