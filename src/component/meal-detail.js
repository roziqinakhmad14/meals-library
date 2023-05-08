import "./ingredients-list.js";
import "./instructions-list.js";

class MealDetail extends HTMLElement {
    constructor() {
        super();
    }
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
            .ingredients-left {
                float: left;
            }
            .ingredients-right {
                float: right;
            }
        </style>
        `;

        const meal = {
            "id": this._meal.idMeal,
            "name": this._meal.strMeal,
            "image": this._meal.strMealThumb
        };

        const ingredientsList = document.createElement("ingredients-list");
        ingredientsList.meal = this._meal;

        const mealImage = document.createElement("img");
        mealImage.setAttribute("id", meal.id);
        mealImage.setAttribute("src", meal.image);
        mealImage.setAttribute("alt", meal.name);
        
        const clear = document.createElement("div");
        clear.setAttribute("class", "clear");

        const instructionsList = document.createElement("instructions-list");
        instructionsList.meal = this._meal;

        this.append(mealImage, ingredientsList, clear, instructionsList);
    }
}

customElements.define("meal-detail", MealDetail);