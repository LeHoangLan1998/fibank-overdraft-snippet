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
            <div className="margin" style={{paddingLeft:"0px", marginBottom:"0px"}}>
                <div style={{float:"left", width:"50%"}}>
            <label>
                Имена върху картата на латиница:
            </label>
                </div>

                <div className="relative-position-left" style={{left:"40px"}}>
            <label>
                Ключова дума:
            </label>
                </div>
            </div>

            <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", display:"flow-root"}}>

                <div style={{float:"left", width:"28%"}}>
                <input 
                type="text" 
                name="nameLatin" 
                value={inputs.nameLatin || ""} 
                onChange={handleChange}
                />
                {validateNameLatin(inputs.nameLatin) ? null : <p className="error">Само латински символи са позволени</p>}
                </div>

                <div className="relative-position-left">
                <input 
                type="text" 
                name="keyword" 
                value={inputs.keyword || ""} 
                onChange={handleChange}
                style={{width:"60%"}}
                />
                </div>
            </div>
            
            <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", display:"flow-root"}}>

                <div style={{float:"left"}}>
                    <label>Бранд:</label>
                </div>

                <div className="relative-position-left" style={{left:"120px"}}>
                    <label>Вид:</label>
                </div>

                <div className="relative-position-left" style={{left:"240px"}}>
                    <label>Валута:</label>
                </div>

                <div className="relative-position-left" style={{left:"360px"}}>
                    <label>Желан лимит:</label>
                </div>
            </div>
            
            <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", display:"flow-root"}}>
                <div style={{float:"left"}}>
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
            

                <div className="relative-position-left" style={{left:"52px"}}>
                    <select style={{width:"60%"}}>
                        {options}
                    </select>
                </div>
            

                <div className="relative-position-left" style={{left:"18px"}}>
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
            

                <div className="relative-position-left" style={{left:"78px"}}>
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