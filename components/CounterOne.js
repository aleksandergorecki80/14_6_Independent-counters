class CounterOne extends React.Component {

    constructor() {
        super();
        this.state = {
            counterName: "Counter one",
            counterState: 0,
        };
      }

    increaseState(){
      this.setState({
        counterState: this.state.counterState + 1
      });
    }

    decreaseState(){
      this.setState({
        counterState: this.state.counterState - 1
      });
    }

 render() {
  return (
   <div >
      <p>
        <button className = "btn" onClick = {this.decreaseState.bind(this)}>-</button>
        <span>{this.state.counterName}</span>
        <span className="badge">{this.state.counterState}</span>
        <button className = "btn" onClick = {this.increaseState.bind(this)}>+</button>
      </p>
   </div>
  );
 }
}
