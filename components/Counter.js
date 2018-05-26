
var Counter = React.createClass({
  getDefaultProps: function(){
    return {
      gameName: 'Default',
      counterName: 'Score'
    }
  },

    propTypes: {
    gameName: React.PropTypes.string.isRequired,
    counterName: React.PropTypes.string.isRequired
  },


    reset: function() {
      this.setState({
        gameName: 'nowa nazawa'
      })
    },

  getInitialState: function(){
    return {
      counter: 0,
      message: 'my setState'
    };
  },

  increment: function(){
    this.setState({
      counter: this.state.counter +1
    });
  },

  decrement: function(){
    this.setState({
      counter: this.state.counter -1
    });
  },

  componentWillMount: function() {
    return {

    }
  }, 

componentWillReceiveProps(nextProps) {
  console.log('props recieved');
  },

  shouldComponentUpdate(){
  return true;
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, this.props.gameName),
      React.createElement('span', {}, this.props.counterName + ': ' + this.state.counter),
      React.createElement('span', {}, this.state.message),
      React.createElement('button', {
        onClick: this.increment
      }, 'Add'),
      React.createElement('button', {
        onClick: this.decrement
      }, 'Subtract'),
      React.createElement('button', {onClick: this.reset}, 'Send new props')
    );
  },

  componentDidMount: function(){
    var $span = $('span').css('background-color', 'yellow');
    console.log($span);
    return $span
  }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

