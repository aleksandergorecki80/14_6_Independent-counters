class App extends React.Component {
	constructor(){
		super();
		this.state = {
			headerName: "Score table",
			countersMount: true
		};
	}

	onChangeName(newName){
		this.setState({
            headerName: newName
        });
	}

	mountOnmountCounters(){
		this.setState({
			countersMount: !this.state.countersMount
		});
	}

	render(){	
			let divCounters = '';
			if (this.state.countersMount){
				divCounters = <div className="counters">
					<CounterOne counterName = {"Counter one"}/>
					<CounterOne counterName = {"Counter two"}/>
					<CounterOne counterName = {"Counter three"}/>
				</div>
			}

		return (
			<div className="container">
				<h1>{this.state.headerName}</h1>
				<Header 
					headerName = {this.state.headerName}
					changeName={this.onChangeName.bind(this)}
				/>
				<button className="btn" onClick={this.mountOnmountCounters.bind(this)}>Show / hide counters</button>
				{divCounters}
				<LifeStages componentName="App"/>
			</div>
		);
	}
}

var app = <App />;
ReactDOM.render(app, document.getElementById('app'));



