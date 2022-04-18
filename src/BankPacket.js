import { useState } from "react";

const BankPacket = () => {
    const [status, setStatus] = useState(0);





    return (
        <div className="margin-first"> 
            <div>
                <a href="https://www.fibank.bg/bg/chastni-lica/bankirane/bankovi-paketi/mojat-izbor-onlajn#nasheto-predlojenie">
                    Банков пакет:
            </a>
            </div>

            <div className = "radio-button-1">
            <input 
                type="radio" 
                id = "affirmative" 
                name = "bankpacket" 
                value ="True"
                onClick={() =>setStatus(1)}
            />
            <label for = "newOverdraft">Да</label>
            </div>

            <div className="radio-button-2">
            <input
                type="radio" 
                id = "updateOverdraft" 
                name = "bankpacket" 
                value ="False"
                onClick={() =>setStatus(0)}
            />
            <label for = "updateOverdraft">Не</label>
            </div>

            <div>
            {status ? <BankPacketDetails/> : null}
            </div>

        </div>
    );
}

function BankPacketDetails(){
    return(
        <div> 
            <div>
            <ul>
            <li className="list-no-bullet">Какво получавате с пакетните програми на Fibank?
            <ul>
                <li>удобно банкиране, чрез комбинация от банкови продукти и услуги;</li>
                <li>оптимизиране на разходи за ползване на банкови продукти и услуги;</li>
                <li>предсказуеми месечни разходи.</li>
            </ul>
            </li>
            </ul>
            </div>

            <div>
                <input 
                    type="radio" 
                    id = "wantNewPacket" 
                    name = "bankpacketConf" 
                    value ="True"
            />
            <label for = "newOverdraft">Желая нов</label>



                <input
                    type="radio" 
                    id = "alreadyUsingPacket" 
                    name = "bankpacketConf" 
                    value ="False"
                />
                <label for = "updateOverdraft">Вече използвам</label>
            </div>

        </div>
           
    )
}
 
export default BankPacket;