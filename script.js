class App extends React.Component {


	constructor(){
		super();
		this.state = {
			headerName: "Score table"
		};
	}

	onChangeName(newName){
		this.setState({
            headerName: newName
        });
	}

	render(){
		return (
			<div className="container">
				<h1>{this.state.headerName}</h1>
				<Header 
					headerName = {this.state.headerName}
					changeName={this.onChangeName.bind(this)}
				/>
				<CounterOne counterName = {"Counter one"}/>
				<CounterOne counterName = {"Counter two"}/>
				<CounterOne counterName = {"Counter three"}/>
			</div>
		);
	}
}


var app = <App />;
ReactDOM.render(app, document.getElementById('app'));



