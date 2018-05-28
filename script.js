class App extends React.Component {



	onCangeName(newName){

	}

	render(){

		var counters = [
			{
			id: 1,
			name:  "Counter one"},
			{
			id: 2,
			name:  "Counter two"},
			{
			id: 3,
			name:  "Counter three"},
		];

console.log(counters[0].name);
		return (
			<div className="container">
				<CounterOne counterName = {counters[0].name} counterId={counters[0].id}/>
				<CounterOne counterName = {counters[1].name} counterId={counters[1].id}/>
				<CounterOne counterName = {counters[2].name} counterId={counters[2].id}/>

			</div>
		);
	}
}


var app = <App />;
ReactDOM.render(app, document.getElementById('app'));



