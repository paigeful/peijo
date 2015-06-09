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
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.name), 
                React.createElement("p", null, "Change Name: "), 
                React.createElement("input", {type: "text", value: this.state.name, onChange: this.handleChange}), 
                React.createElement("h1", null, "Simple Calculator"), 
                React.createElement("input", {type: "text", className: "val1"}), " + ", React.createElement("input", {type: "text", className: "val2"}), 
                React.createElement("div", null, 
                    React.createElement("button", {type: "button", className: "add-btn", onSubmit: this.addUp}, "Add")
                ), 
                React.createElement("h2", null, this.state.result)
            )
        );
    }
});
React.render(
  React.createElement(NameBox, null), document.getElementById('simple-example')
);

