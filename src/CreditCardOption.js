import { useState } from "react";
import CreditCardForm from "./CreditCardForm";

const CreditCardOption = () => {

    const [status, setStatus] = useState(0);
    

    return ( 
        <div className="margin-first"> 
            <div>
            <h4>
                Кредитна карта с SMS известия:
            </h4>
            </div>

            <div className="radio-button-3">
            <input 
                type="radio" 
                id = "affirmative" 
                name = "creditCard" 
                value ="True"
                onClick={() =>setStatus(1)}
                />
            <label for = "newOverdraft">Да</label>
            </div>

            <div className="radio-button-4">
            <input
                type="radio" 
                id = "negative" 
                name = "creditCard" 
                value ="False"
                onClick={() =>setStatus(0)}
            />
            <label for = "updateOverdraft">Не</label>
            </div>

            {status ? <CreditCardUseConf/> : null}
        </div>
     );
}

const CreditCardUseConf = () => {
    const [status, setStatus] = useState(0);
    return(
        <div style={{marginTop:"15px",marginBottom:"15px"}}>
            <div>

            <input 
                type="radio" 
                id = "affirmativeConf" 
                name = "creditCardConf" 
                value ="True"
                onClick={() => setStatus(1)}
                />
            <label for = "newOverdraft">Желая нова</label>


            <input
                type="radio" 
                id = "negativeConf" 
                name = "creditCardConf" 
                value ="False"
                onClick={() => setStatus(0)}
            />
            <label for = "updateOverdraft">Вече използвам</label>

            </div>

            {status ? <CardDetailsForm/> : null}
        </div>
    );
}

function CardDetailsForm() {
    return (
        <CreditCardForm />
    );
}
 

 
export default CreditCardOption;