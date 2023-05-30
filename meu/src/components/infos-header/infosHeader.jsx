import '../infos-header/infosHeader.css'
import Relogio from '../infos-header/img/relogio.png'
import WhatsApp from '../infos-header/img/whatsapp2.png'
import Local from '../infos-header/img/local.png'

function infosHeader(){
    return(
        <div className="infosHeader">
            <div className="time">
                <img src={ Relogio }/>
                <p>07:00 à 00:00 <br /> aberto agora</p>

            </div>

            <div className="time">
                <img src={ WhatsApp }/>
                <p>(34) 3825-3003 <br /> entre em contato </p>
            </div>

            <div className="time">
                <img src={ Local }/>
                <p>Cristo redentor <br /> Patos De Minas </p>
            </div>
            
        </div>
    )
}

export default infosHeader;