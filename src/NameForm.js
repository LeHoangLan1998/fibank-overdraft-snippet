import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import bg from 'date-fns/locale/bg';
import { registerLocale } from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
registerLocale('bg',bg);
setDefaultLocale('bg');

function NameForm() {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(inputs.telNumber.length !== 7){
        window.alert("Невалиден номер")
      }
    }

    const [startDate, setStartDate] = useState(new Date());
    const handleDateSelect = (event) =>{
      event.preventDefault();
    }
  
    return (
      <form onSubmit = {handleSubmit} className="margin-only">

        <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", display:"flow-root"}}>
          <div style={{float:"left"}}>
            <label>
            Имена(Име, Презиме, Фамилия):
            </label>
            <br/>

            <input 
              type="text"
              name="fullname"
              value = {inputs.fullname || ""}
              onChange = {handleChange}
              style={{width:"220%"}}
            />
        
          </div>

          <div className="relative-position-right" style={{right:"90px"}}>
            <label>
              ЕГН:
            </label>
            <br/>
            <input
              type="number"
              name="egn"
              maxLength={10}
              value = {inputs.egn || ""}
              onChange = {handleChange}
            />
            {validateEGN(inputs.egn) ? null : <p className="error">Невалидно ЕГН</p>}
            {checkEmpty(inputs.egn) ? <p className="error">Полето е задължително</p> : null}
        

          </div>
        </div>

        <div>
          {validateName(inputs.fullname) ? null : <p className="error">Допустими са само букви на кирилица</p>}
        </div>
        <div>
          {checkEmpty(inputs.fullname) ? <p className="error">Полето е задължително</p> : null}
        </div>
        
        <br/>

        <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", marginBottom:"0px", display:"flow-root"}}>
        <div style={{float:"left"}}>
          <label>Лична карта №:</label>
          <br/>
          <input
            type="number"
            name="idNumber"
            value = {inputs.idNumber || ""}
            onChange = {handleChange}
          />
        </div>


        <div className="relative-position-left" style={{left:"5px"}}>
          <label>Издадена на:</label>
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            onSelect={handleDateSelect}
            dateFormat="dd/MM/yyyy"
            locale="bg"
            showYearDropdown
          />
        </div>
        

        <div className="relative-position-left" style={{right:"88px"}}>
        <label>Мобилен</label>
        <br/>
          <select style={{width:"120%"}}>
            <option value = {null}>
              КОД
            </option>
            <option>
              088
            </option>
            <option>
              098
            </option>
            <option>
              089
            </option>
            <option>
              087
            </option>
            <option>
              099
            </option>
          </select>
        </div>

        <div className="relative-position-left" style={{right:"74px"}}>
        <label>телефон:</label>
        <br/>
          <input
            type="number"
            name="telNumber"
            value = {inputs.telNumber || ""}
            onChange = {handleChange}
            style={{width:"60%"}}
          />
          
        </div>


        <div className="relative-position-right" style={{right:"90px", bottom:"41px"}}>
        <label>Email:</label>
        <br/>
          <input 
            type="text"
            name="email"
            value = {inputs.email || ""}
            onChange = {handleChange}
          />
            {validateEmail(inputs.email) ? null : <p className="error">Невалиден имейл.</p>}
            {checkEmpty(inputs.email) ? <p className="error">Полето е задължително</p> : null}
        </div>

        <div className="margin-only" style={{paddingLeft:"0px", marginTop:"0px", display:"flow-root"}}>
          <div style={{float:"left", width:"30%"}}>
          {validateIdNumber(inputs.idNumber) ? null : <p className="error">Прехвърлена максимална дължина</p>}
          {checkEmpty(inputs.idNumber) ? <p className="error">Полето е задължително</p> : null}
          </div>
          <div style={{position:"relative", left:"160px"}}>
            {validateTelNumber(inputs.telNumber) ? null : <p className="error">Невалиден номер</p>}
            {checkEmpty(inputs.telNumber) ? <p className="error">Полето е задължително</p> : null}
          </div>
        </div>
        </div>

      </form>
    )
  }

  function validateName(name){
    let isValidName = true;
    if (name != null){
    if(/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name) || !/[\u0401\u0451\u0410-\u044f]/g.test(name)){
      isValidName = false;
    }
    }
    return isValidName;
  }

  function validateEGN(egn){
    let isValidEgn = true;
    if (egn == null){
    }
    else if(egn.length > 10){
      isValidEgn = false;
    }
    return isValidEgn;
  }

  function validateIdNumber(idNumber){
    let isValidNumber = true;
    if (idNumber == null){
    }
    else if(idNumber.length > 9){
      isValidNumber = false;
    }
    return isValidNumber;
  }

  function validateTelNumber(telNumber){
    let isValidNumber = true;
    if (telNumber == null){
    }
    else if(telNumber.length > 7){
      isValidNumber = false;
    }
    return isValidNumber;
  }

  function validateEmail(email){
    let isValidEmail = false;
    if(/[@]/g.test(email) || email=="" || email == null){
      isValidEmail= true;
    }
    return isValidEmail;
  }

  function checkEmpty(input){
    if (input === "" && input != null){
      return true;
    }
    else return false;
  }

  export default NameForm;