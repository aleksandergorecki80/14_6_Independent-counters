class CounterOne extends React.Component {
 constructor() {
  super();
  this.state = {
   counter: 0
  };
  this.kki = 'kki';
 }

 increaseState() {
  this.setState(prevState => ({
 counter: prevState.counter + 1
}));
 }

 decreaseState() {
  this.setState(prevState => ({
 counter: prevState.counter - 1
}));
 }

 render() {
  return (
   <div className="counter">
    <p>{this.props.counterName}</p>
    <button className="btn" onClick={this.decreaseState.bind(this)}>
     -
    </button>
    <span className="badge">{this.state.counter}</span>
    <button className="btn" onClick={this.increaseState.bind(this)}>
     + {this.kki}
    </button>
    <hr />
    <LifeStages componentName="CounterOne" />
   </div>
  );
 }
}

CounterOne.propTypes = {
 counterName: React.PropTypes.string
};
