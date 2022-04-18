import './App.css';
import NameForm from './NameForm.js';
import RequestType from './RequestType.js';
import SliderFunction from './SliderFunction.js';
import BankPacket from './BankPacket.js';
import CreditCardOption from './CreditCardOption.js';

function App() {
  return (
    <div className="App">
      <div className="Header">

        <div id = "receiver">

          <div className = "col-1">
            <div className = "logo"/>
          </div>
        
          <div className = "col-2">
            <p className='all-caps'>
              До Първа Инвестиционна Банка АД
            </p>
            <p className='all-caps bold'>
              Дирекция "Дигитално банкиране"
            </p>
          </div>

        </div>

        <div className="margin-first">
          <h2 className="titleHeader">
             ОВЪРДРАФТ "ЛЕСЕН КРЕДИТ"
          </h2>
        </div>

        <hr className="rowDivider"/>
      </div>


      <div className="Content">
        <RequestType/>
        <br/>
        <SliderFunction/>
        <br/>
        <BankPacket/>
        <CreditCardOption/>
        <hr className="rowDivider" style={{margin:"0 0 20px 0", width:"900px"}}/>
        <div className="margin-only">
          <h4 className="all-caps bold">
            КРЕДИТОИСКАТЕЛ
          </h4>
        </div>
        <NameForm/>
      </div>
    </div>
  );
}

export default App;
