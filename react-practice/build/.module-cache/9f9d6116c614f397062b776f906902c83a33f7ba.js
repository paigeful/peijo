var NameBox = React.createClass({displayName: "NameBox",
    getInitialState: function () {
        return {
            name: peiqi
        }
    },
    render: function () {
        return (
            React.createElement("h1", null, "this.state.name")
        );
    }
});
React.render(
  React.createElement(NameBox, null), document.getElementById('simple-example')
);

