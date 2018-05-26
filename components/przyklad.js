var ComponentToTest = React.createClass({
  getInitialProps() {
    return {
      myProp: "blank"
    };
  },
  getInitialState() {
    return {
      modified: "still blank"
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      modified: nextProps.myProp + "IsSoModified"
    });
  },
  render() {
    return <div class="displayed">{this.state.modified}</div>
  }
});