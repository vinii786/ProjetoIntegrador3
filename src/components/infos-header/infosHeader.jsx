import React from 'react';
import '../infos-header/infosHeader.css';
import Relogio from '../infos-header/img/relogio.png';
import WhatsApp from '../infos-header/img/whatsapp2.png';
import Local from '../infos-header/img/local.png';

function InfosHeader() {
  var data = new Date();
  var Hora = data.getHours()
  var res = <div className="time"></div>;

  if (Hora > 0) {
    var time = 'fechado agora'
    res = (
      <div className="time" style={{ color: 'red' }}>
        <style>{`
          .time {
            color: red;
          }
        `}</style>
      </div>
    );
  }else {
    var time = 'aberto agora'
    res = (
      <div className="time" style={{ color: 'red' }}>
        <style>{`
          .time {
            color: green;
          }
        `}</style>
      </div>
    );
  }
  

  return (
    <div className="infosHeader">
      {res}

      <div className="time">
        <img src={Relogio} alt="Relógio" />
        <p>07:00 à 00:00 <br />  {time}</p>
      </div>
      <div className="time">
        <a href="https://wa.me/553498162029?text=" target="_blank" rel="noopener noreferrer">
          <img src={WhatsApp} alt="WhatsApp" />
          <p>(34) 3825-3003 <br /> entre em contato </p>
        </a>
      </div>

      <div className="time">
        <a href="https://goo.gl/maps/JNzDiptJvMtnG31KA" target="_blank" rel="noopener noreferrer">
          <img src={Local} alt="Local" />
          <p>Cristo redentor <br /> Patos De Minas </p>
        </a>
      </div>
    </div>
  );
}

export default InfosHeader;
