import './App.css';
import { useState , useEffect } from 'react';
import { evaluate, sqrt} from 'mathjs';
import ButtonsArray from './components/ButtonsArray';
import Display from './components/Display';

function App() {

  // Set state for buttons pressed 
  const [buttonsPressed, setButtonsPressed] = useState([]);

  // Set state if it's a new calculation 
  const [newCalc, setNewCalc] = useState(false);

  // Set state for expression 
  const [expression , setExpression] = useState('');

  // Set state for answer
  const [answer , setAnswer] = useState();

  // Set tstate for squareroot toggle
  const [sqrtState, setSqrtState] = useState(false);




  // Set the expression
  const  findExpression = () => {
      const expressionJoin = buttonsPressed.join('')
      setExpression(expressionJoin); 
    }
  
  
  // Do the calcualtion when the expression changes 
  useEffect(() => {
    async function getAnswer(){
      try{
        let mathAnswer = evaluate(expression)
        setAnswer(mathAnswer)
      } 
      // Catch any errors
      catch (err){
        console.log(err.message)
      }
    };    
    // Get the expression when a change has been detected in the expression 
    getAnswer();
  }, [expression]);



    // Do the calcualtion when sqrt is pressed
    useEffect(() => {
      async function getSqrt(){
        try{
          const expressionJoin = buttonsPressed.join('')
          let mathAnswer = sqrt(expressionJoin)
          setAnswer(mathAnswer)
          setNewCalc(true)
        } 
        // Catch any errors
        catch (err){
          console.log(err.message)
        }
      };    
      // Get the expression when a change has been detected in the expression 
      getSqrt();
    }, [sqrtState]);

  return (
    <div className='app'>
      <div className='calculator'>
        <Display buttonsPressed={buttonsPressed} answer={answer}></Display>
        <ButtonsArray 
        buttonsPressed={buttonsPressed} 
        setButtonsPressed={setButtonsPressed} 
        doCalculation={findExpression} 
        newCalc={newCalc}
        setNewCalc={setNewCalc}
        setAnswer={setAnswer}
        setSqrtState={setSqrtState}
        sqrtState={sqrtState}
        ></ButtonsArray>
        </div>
      </div>
  );
}

export default App;
