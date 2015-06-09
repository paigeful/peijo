var IngredientList = React.createClass({
    render: function () {
        var list = this.props.ingredients.map(function(item) {
            return <li>{item}</li>;
        });
        return (
            <ul>
                {list}
            </ul>
        )
    }
});
var RecipeBlock = React.createClass({
    render: function () {
        return (
            <div>
                <h2>{this.props.recipeName}</h2>
                <p>Ingredients:</p>
                <IngredientList ingredients={this.props.ingredients}/>
            </div>
        );
    }
});

var AddIngredients = React.createClass({
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
            <div>
                <input type="text" value={this.state.ingredient} onChange={this.handleChange} />
                <button type="button" onClick={this.handleButtonClick}>Add Ingredient</button>
            </div>
        );
    }
});

var RecipeContainer = React.createClass({
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
            <div>
                <h1>Recipe</h1>
                <RecipeBlock recipeName={this.state.recipeName} ingredients={this.state.ingredients}/>
                <AddIngredients addIngredient={this.addNewIngredient} />
            </div>
        );
    }
});

React.render(<RecipeContainer />, document.getElementById('recipe'));