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

        <div  className="grid-container">
          <div className="box-item2">
            <label>
              Имена(Име, Презиме, Фамилия):
            </label>
            <br/>

            <input 
              type="text"
              name="fullname"
              value = {inputs.fullname || ""}
              onChange = {handleChange}
              style={{width:"550px"}}
            />
            {validateName(inputs.fullname) ? null : <p className="error">Допустими са само букви на кирилица</p>}
            {checkEmpty(inputs.fullname) ? <p className="error">Полето е задължително</p> : null}
          </div>

          <div>
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

          <div>
            <label>Лична карта №:</label>
            <br/>
            <input
              type="number"
              name="idNumber"
              value = {inputs.idNumber || ""}
              onChange = {handleChange}
              style={{width:"170px"}}
            />
            {validateIdNumber(inputs.idNumber) ? null : <p className="error">Прехвърлена максимална дължина</p>}
            {checkEmpty(inputs.idNumber) ? <p className="error">Полето е задължително</p> : null}
          </div>


          <div>
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
        

          <div>
            <label>Мобилен</label>
            <br/>
            <select style={{width:"70px"}}>
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

          <div>
            <label>телефон:</label>
            <br/>
            <input
              type="number"
              name="telNumber"
              value = {inputs.telNumber || ""}
              onChange = {handleChange}
              style={{width:"100px"}}
            />
            {validateTelNumber(inputs.telNumber) ? null : <p className="error">Невалиден номер</p>}
            {checkEmpty(inputs.telNumber) ? <p className="error">Полето е задължително</p> : null}
          </div>


          <div>
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

        </div>
      </form>
    )
  }

   //Функции за валидация
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