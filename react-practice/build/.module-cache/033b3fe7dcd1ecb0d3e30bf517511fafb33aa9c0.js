var NameBox = React.createClass({displayName: "NameBox",
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
        val1 = ParseInt(val1, 10);
        val2 = ParseInt(val2, 10);
        this.setState({
            result: val1 + val2
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.name), 
                React.createElement("p", null, "Change Name: "), 
                React.createElement("input", {type: "text", value: this.state.name, onChange: this.handleChange}), 
                React.createElement("h1", null, "Simple Calculator"), 
                React.createElement("input", {type: "text", ref: "val1"}), " + ", React.createElement("input", {type: "text", ref: "val2"}), 
                React.createElement("div", null, 
                    React.createElement("button", {type: "button", className: "add-btn", onClick: this.addUp}, "Add")
                ), 
                React.createElement("h2", null, this.state.result)
            )
        );
    }
});
React.render(
  React.createElement(NameBox, null), document.getElementById('simple-example')
);

