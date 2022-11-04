


function Display(props) {


  return (
    <div className='display'>
     
      {props.buttonsPressed.map((buttonPressed, buttonPressedIndex) => {
        return <p className="input" key={buttonPressedIndex}> {buttonPressed} </p>
      })}
      <p id="answer">{props.answer}</p>


    </div>
  );
}

export default Display;
