class CounterOne extends React.Component {

    constructor() {
        super();
        this.state = {
            counterState: 0
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
   <div  className="counter">
        <p>{this.props.counterName}</p>
        <button className = "btn" onClick = {this.decreaseState.bind(this)}>-</button>
        <span className="badge">{this.state.counterState}</span>
        <button className = "btn" onClick = {this.increaseState.bind(this)}>+</button>
        <hr />
        <LifeStages componentName="CounterOne"/>
   </div>
  );
 }
}


CounterOne.propTypes = {
  counterName: React.PropTypes.string
};



