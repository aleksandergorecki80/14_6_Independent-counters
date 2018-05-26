var Counter = React.createClass({
	getInitialState: function(){
		return {
			counter: 0
		};
	},

	getDefaultProps: function(){
		return {
			counterName: 'Score'
		}
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

	render: function() {
		return React.createElement('div', {},
			React.createElement('span', {}, this.props.counterName + ': ' + this.state.counter),
			React.createElement('button', {
				onClick: this.increment
			}, 'Add'),
			React.createElement('button', {
				onClick: this.decrement
			}, 'Subtract')
		);
	},

	componentDidMount: function(){
		//var $span = $('span').html();
		var $span = $('span').css('background-color', 'yellow');
		console.log($span);
		return $span
	},
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));