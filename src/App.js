import './App.css';
import Buttons from './components/Buttons';
import ButtonValues from './components/ButtonValues';

function App() {
  return (
    <div className='app'>
      <div className='calculator'>
        <div className='display'>
          <p>1+1</p>
        </div>
        <div className='buttons-array'>
          {ButtonValues.map(( button, buttonIndex ) => {
            return <Buttons
              key={button.id} 
              label={button.label} 
              value={button.value}> 
            </Buttons>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
