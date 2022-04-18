const RequestType = () => {
    return (
        <div className = "margin">
            <h4 className = "all-caps bold">Параметри на искането</h4>
        <div className = "button-margin"> Вид искане:
            <input type="radio" id = "newOverdraft" name = "parameterRequest" value ="Нов овърдрафт" ></input>
            <label for = "newOverdraft">Нов овърдрафт</label>
            <input type="radio" id = "updateOverdraft" name = "parameterRequest" value ="Преговаряне на съществуващ лимит" ></input>
            <label for = "updateOverdraft">Предоговаряне на съществуващ лимит</label>
        </div>
        </div>
    );
}
 
export default RequestType;