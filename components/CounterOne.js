class CounterOne extends React.Component {

    constructor() {
        super();
        this.state = {
            counterState: 0
        };
      }

          /*      life stages     */
    componentWillMount(){   // działa
      console.log("Component will mount");
    }

    componentDidMount(){  // działa
      console.log("Component did mount ")
    }

    componentWillReceiveProps(nextProps){
      console.log("Component will receive props", nextProps)
    }


    shouldComponentUpdate(nextProps, nextState) { // działa
      console.log(" Should component update", nextProps, nextState);
      
      return true;
    }

    componentWillUpdate(nextProps, nextState){ // działa
      console.log("Component will update ", nextState, nextProps);
    }

    componentDidUpdate(prevProps, prevState){ // działa
    console.log('Component did update', prevProps, prevState);       
    }

    componentWillUnmount(){
      console.log("Component will unmount");
    }

/*       ***********      */

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
   </div>
  );
 }
}


CounterOne.propTypes = {
  counterName: React.PropTypes.string
};



