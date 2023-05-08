class MealItem extends HTMLElement {
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
        .meal-item {
            width: 100%;
            padding: 0;
        }
        .meal-item img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
            margin-bottom: 10px;
        }
        .meal-item p {
            font-weight: 600;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 20px;
            text-align: center;
            font-size: 18px;
        }
        </style>
        <div id="${this._meal.idMeal}" class="meal-item card">
            <img src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
            <p>${this._meal.strMeal}</p>
        </div>
        `;
    }
}

customElements.define("meal-item", MealItem);