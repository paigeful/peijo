var Ingredients = React.createClass({displayName: "Ingredients",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("ul", null, 
                    React.createElement("li", null, "milk"), 
                    React.createElement("li", null, "sugar")
                )
            )
        );
    }
});

var RecipeBlock = React.createClass({displayName: "RecipeBlock",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h2", null, this.props.recipeName), 
                React.createElement("p", null, "Ingredients:"), 
                React.createElement(Ingredients, null)
            )
        );
    }
});

var AddIngredients = React.createClass({displayName: "AddIngredients",
    getInitialState: function () {
        return {
            ingredient: ""
        };
    },
    handleChange: function (e) {
        console.log(e.target.value);
        this.setState({
            ingredient: e.target.value
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value: this.state.ingredient, onChange: this.handleChange}), 
                React.createElement("button", {type: "button", onClick: this.handleButtonClick}, "Add Ingredient")
            )
        );
    }
});

var RecipeContainer = React.createClass({displayName: "RecipeContainer",
    getInitialState: function () {
        return {
            recipeName: "Milk cube"
        };
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Recipe"), 
                React.createElement(RecipeBlock, {recipeName: this.state.recipeName}), 
                React.createElement(AddIngredients, null)
            )
        );
    }
});

React.render(React.createElement(RecipeContainer, null), document.getElementById('recipe'));