import './slider.css'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';

function Slider() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/med.js').then((Response) => Response.json())
      .then(setData);
  }, [])

  return (
    <div className='container'>
      <div className="titulo">
        <h1>Categorias</h1>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, image, rota } = item;
          return (
            <div className="item" key={id}>
              <a href={ rota }>
              <div className="img">
                <img src={image} />
              </div>
              <div className='sub-title'>
                <span>{name}</span>
              </div>
              </a>
            </div>
          );
        })}
      </div>

    </div>
  )

}
export default Slider;