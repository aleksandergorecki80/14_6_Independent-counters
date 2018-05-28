class App extends React.Component {
	render(){
		return (
			<div className="container">
				<CounterOne />
				<CounterOne />
				<CounterOne />
			</div>
		);
	}
}


var app = <App />;
ReactDOM.render(app, document.getElementById('app'));



