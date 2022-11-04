

function Buttons(props) {
  return (
    <div className="button-number" onClick={() => {props.clicked(props.value, props.id)} }>
      <p>{props.label}</p>
    </div>
  );
}

export default Buttons;
