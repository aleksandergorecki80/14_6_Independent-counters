class Header extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: props.headerName
        };
      }

    onChangeName(){
      this.props.changeName(this.state.name);
    }

    onHandleChange(event){
      this.setState ({
        name: event.target.value
      });
    }

  render() {
    return (
      <div>
        <input className="form-control" type="text"  value={this.state.name} onChange = {this.onHandleChange.bind(this)}/>
        <button className="btn" onClick={this.onChangeName.bind(this)}>Chane table name</button>
      <LifeStages componentName="Header"/>        
      </div>
      );
  }
}

Header.propTypes = {
  name: React.PropTypes.string,
  changeName: React.PropTypes.func
};