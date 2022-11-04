import './App.css';
import { useState , useEffect } from 'react';
import { evaluate } from 'mathjs';
import ButtonsArray from './components/ButtonsArray';
import Display from './components/Display';

function App() {

  // Set state for buttons pressed 
  const [buttonsPressed, setButtonsPressed] = useState([]);

  // Set state for expression 
  const [expression , setExpression] = useState('');
  console.log(buttonsPressed)

  // Set state for answer
  const [answer , setAnswer] = useState();

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


  return (
    <div className='app'>
      <div className='calculator'>
        <Display buttonsPressed={buttonsPressed} answer={answer}></Display>
        <ButtonsArray buttonsPressed={buttonsPressed} setButtonsPressed={setButtonsPressed} doCalculation={findExpression} ></ButtonsArray>
        </div>
      </div>
  );
}

export default App;
