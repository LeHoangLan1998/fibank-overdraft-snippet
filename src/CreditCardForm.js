import { useState } from "react";

const CreditCardForm = () => {

    const [inputs, setInputs] = useState({});
    const [cardType, setCardType] = useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

        if(!validateNameLatin(inputs.nameLatin)){
        }
    };

    const changeSelectOptionHandler = (event) => {
        setCardType(event.target.value);
    };
    const masterCardType = [
        "Моля изберете",
        "Mastercard PayPass - стандартна",
        "MasterCard - Standard YES",
        "Mastercard - златна",
        "Mastercard - платинена",
    ];

    const visaType = [
        "Моля изберете",
        "Visa paywave - класическа",
        "Visa - златна",
        "Visa - платинена",
    ];
    let type = null;
    let options = null;

    if (cardType === "MasterCard"){
        type = masterCardType;
    }
    else {
        type = visaType;
    }
    options = type.map((el) => <option key={el}>{el}</option>);

    return ( 
        <form className="margin-only">
            <div className="grid-container2">
                <div>
                    <label>
                        Имена върху картата на латиница:
                    </label>
                    
                </div>

                <div>
                    <label>
                        Ключова дума:
                    </label>
                </div>

                <div>
                    <input 
                        type="text" 
                        name="nameLatin" 
                        value={inputs.nameLatin || ""} 
                        onChange={handleChange}
                        style={{width:"220px"}}
                    />
                    <br/>
                    {validateNameLatin(inputs.nameLatin) ? null : <p className="error">Само латински символи са позволени</p>}
                </div>

                <div>
                    <input 
                        type="text" 
                        name="keyword" 
                        value={inputs.keyword || ""} 
                        onChange={handleChange}
                    />
                </div>
            </div>
            
            <div className="grid-container3">

                <div>
                    <label>Бранд:</label>
                    <br/>
                    <select onChange = {changeSelectOptionHandler}>
                        <option value = {null}>
                            Моля изберете
                        </option>
                        <option value="MasterCard">
                            MasterCard
                        </option>
                        <option value="Visa">
                            Visa
                        </option>
                    </select>
                </div>

                <div>
                    <label>Вид:</label>
                    <br/>
                    <select>
                        {options}
                    </select>
                </div>

                <div>
                    <label>Валута:</label>
                    <br/>
                    <select>
                        <option value = {null}>
                            Моля изберете
                        </option>
                        <option>
                            BGN
                        </option>
                        <option>
                            EURO
                        </option>
                        <option>
                            USD
                        </option>
                    </select>
                </div>
                    
                <div>
                    <label>Желан лимит:</label>
                    <br/>
                    <input 
                        type="number" 
                        name="limit" 
                        value={inputs.limit || ""} 
                        onChange={handleChange}
                    />
                </div>
            </div>       
        </form>
    );
}

function validateNameLatin(nameLatin){
    let isValidNameLatin = true;
    if(/[!@#$%^&*(),.?":{}|<>]/g.test(nameLatin) || /\d+/g.test(nameLatin) || !/^[a-zA-Z]+$/g.test(nameLatin)){
        isValidNameLatin = false;
    }
    return isValidNameLatin;
}



export default CreditCardForm;