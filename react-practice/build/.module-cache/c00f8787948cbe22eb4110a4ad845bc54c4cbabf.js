var RecipeContainer = React.createClass({displayName: "RecipeContainer",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Recipe")


            )
        );
    }
});

React.render(React.createElement(RecipeContainer, null), document.getElementById('recipe'));