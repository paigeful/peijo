var NameBox = React.createClass({displayName: "NameBox",
    getInitialState: function () {
        return {
            name: 'peiqi'
        }
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.name), 
                React.createElement("p", null, "Change Name: "), 
                React.createElement("input", {type: "text", value: this.state.name, onChange: this.handleChange})
            )
        );
    }
});
React.render(
  React.createElement(NameBox, null), document.getElementById('simple-example')
);

