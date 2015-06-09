var RecipeContainer = React.createClass({displayName: "RecipeContainer",

    render: function () {
        return (
            React.createElement("div", null, "Recipe")
        );
    }
});

React.render(React.createElement(RecipeContainer, null), document.getElementById('recipe'));