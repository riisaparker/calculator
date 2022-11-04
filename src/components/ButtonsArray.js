import Buttons from './Buttons';
import ButtonValues from './ButtonValues';

function ButtonsArray(props) {

  // When a button is pressed - push it to the buttonsPressed array state
  function clickedButton(clickedValue, clickedId){
    switch (clickedId){
      case 18 :
        console.log("Pressed equals");
        props.doCalculation()
        props.setNewCalc(true)
        break;
      case 0 :
        console.log("Pressed clear");
        props.setButtonsPressed([])
        props.setAnswer()
        break;
      case 1 : 
        console.log("Pressed del")
        break;
      default :
      calculationArray(clickedValue,  props.setButtonsPressed, props.buttonsPressed)
    }
  }

  // Function to set the state of the calcualtion
    //  setter = setButtonsPressed      state = buttonsPressed
  function calculationArray(clickedValue, setter, state){
    const tempObject = clickedValue;
    setter([...state, tempObject])
  }


  // Function to check if it's a new calcl
  function resetFunc (clickedValue, clickedId){
    if (props.newCalc == true){
      if(clickedId == 0){
        props.setButtonsPressed([])
        props.setAnswer()
        props.setNewCalc(false)
      }else{
      props.setButtonsPressed([clickedValue])
      props.setNewCalc(false)
      }
    }else{
      clickedButton(clickedValue, clickedId)
    }
  }


  return (
    <div className='buttons-array'>
      {ButtonValues.map(( button, buttonIndex ) => {
        return <Buttons
          key={button.id} 
          id={button.id}
          label={button.label} 
          value={button.value}
          clicked={resetFunc}
          >   
        </Buttons>
      })}
    </div>
  );
}

export default ButtonsArray;
