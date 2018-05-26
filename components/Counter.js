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
			}, 'Subtract')

		);
	},

	componentDidMount: function(){
		var $span = $('span').css('background-color', 'yellow');
		console.log($span);
		return $span
	}
});

var UpdateCounter = React.createClass({
	getDefaultProps: function(){
		return {
			gameName: 'kkittt',
			counterName: 'asdf'
		}
	},

	render: function(){
		console.log('kki');
		console.log(this.props.gameName);
		return React.createElement('div', {}, 
			React.createElement('button', {onClick: this.updateCounterProps}, 'update')
			
		)
	},

	updateCounterProps: function(){
		
	},

	render: function(){
		return React.createElement(Counter, {gameName: this.props.gameName, counterName: this.props.counterName},)
	}

});

var element = React.createElement(Counter);
var element1 = React.createElement(UpdateCounter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element1, document.getElementById('app-1'));
