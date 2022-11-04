import Buttons from './Buttons';
import ButtonValues from './ButtonValues';

function ButtonsArray(props) {

  // When a button is pressed - push it to the buttonsPressed array state
  function clickedButton(clickedValue, clickedLabel, clickedId){

    switch (clickedId){
      case 18 :
        console.log("Pressed equals");
        props.doCalculation()
        break;
      case 0 :
        console.log("Pressed clear");
        break;
      case 1 : 
        console.log("Pressed del")
        break;
      default :
      calculationArray(clickedValue, clickedLabel, props.setButtonsPressed, props.buttonsPressed)
    }
  }

  // Function to set the state of the calcualtion
    //  setter = setButtonsPressed      state = buttonsPressed
  function calculationArray(clickedValue, clickedLabel, setter, state){
    const tempObject = clickedValue;
        setter([...state, tempObject])
  }



  return (
    <div className='buttons-array'>
      {ButtonValues.map(( button, buttonIndex ) => {
        return <Buttons
          key={button.id} 
          id={button.id}
          label={button.label} 
          value={button.value}
          clicked={clickedButton}
          >   
        </Buttons>
      })}
    </div>
  );
}

export default ButtonsArray;
