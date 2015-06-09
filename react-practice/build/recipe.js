var IngredientList = React.createClass({displayName: "IngredientList",
    render: function () {
        var list = this.props.ingredients.map(function(item) {
            return React.createElement("li", null, item);
        });
        return (
            React.createElement("ul", null, 
                list
            )
        )
    }
});
var RecipeBlock = React.createClass({displayName: "RecipeBlock",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h2", null, this.props.recipeName), 
                React.createElement("p", null, "Ingredients:"), 
                React.createElement(IngredientList, {ingredients: this.props.ingredients})
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
        this.setState({
            ingredient: e.target.value
        });
    },
    handleButtonClick: function () {
        var newIngredient = [this.state.ingredient];
        this.props.addIngredient(newIngredient);
        this.setState({
            ingredient: ""
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
            recipeName: "Milk cube",
            ingredients: ["milk", "sugar"]
        };
    },
    addNewIngredient: function (newIngredient) {
        this.setState({
            ingredients: this.state.ingredients.concat(newIngredient)
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Recipe"), 
                React.createElement(RecipeBlock, {recipeName: this.state.recipeName, ingredients: this.state.ingredients}), 
                React.createElement(AddIngredients, {addIngredient: this.addNewIngredient})
            )
        );
    }
});

React.render(React.createElement(RecipeContainer, null), document.getElementById('recipe'));