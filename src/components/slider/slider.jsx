import './slider.css'
import { useEffect, useState, useRef } from 'react'

function Slider() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/med.json').then((Response) => Response.json())
      .then(setData);
  }, [])

  return (
    <div className='container'>
      <div className="titulo">
        <h1>Categorias</h1>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className="item" key={id}>
              <div className="img">
                <img src={image} />
              </div>
              <div className='sub-title'>
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )

}
export default Slider;