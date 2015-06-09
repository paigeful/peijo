var NameBox = React.createClass({
    getInitialState: function () {
        return {
            name: 'peiqi',
            result: 0
        };
    },
    handleChange: function (e) {
        this.setState({
            name: e.target.value
        });
    },
    addUp: function () {
        var val1 = React.findDOMNode(this.refs.val1).value.trim();
        var val2 = React.findDOMNode(this.refs.val2).value.trim();
        val1 = parseInt(val1, 10);
        val2 = parseInt(val2, 10);
        this.setState({
            result: val1 + val2
        });
    },
    render: function () {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Change Name: </p>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <h1>Simple Calculator</h1>
                <p>number one</p><input type="text" ref="val1" />
                <p>number two</p><input type="text" ref="val2" />
                <div>
                    <button type="button" className="add-btn" onClick={this.addUp}>Add</button>
                </div>
                <h2>{this.state.result}</h2>
            </div>
        );
    }
});
React.render(
  <NameBox />, document.getElementById('simple-example')
);

