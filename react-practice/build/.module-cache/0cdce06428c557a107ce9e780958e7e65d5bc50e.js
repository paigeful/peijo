var NameBox = React.createClass({displayName: "NameBox",
    render: function () {
        return (
            React.createElement("h1", null, "Name")
        );
    }
});
React.render(
  React.createElement(NameBox, null), document.getElementById('simple-example')
);

