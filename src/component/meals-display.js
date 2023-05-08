import "./meal-item.js";

class MealsDisplay extends HTMLElement {
    constructor() {
        super();
    }
    set search(event) {
        this._search = event;
    }
    set meals(meals) {
        this._meals = meals;
        this.render();
    }
    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItem = document.createElement("meal-item");
            mealItem.meal = meal;
            mealItem.addEventListener("click", () => {
                this._search(meal.idMeal);
            });
            this.appendChild(mealItem);
        });
    }
    renderError(message) {
        this.innerHTML = `
        <h3 style="font-weight: 400;">${message}</h3>
        `;
    }
}

customElements.define("meals-display", MealsDisplay);