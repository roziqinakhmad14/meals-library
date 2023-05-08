class IngredientsList extends HTMLElement {
    constructor() {
        super();
    }
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
    render() {
        const heading = document.createElement("h3");
        heading.innerText = "Ingredients :";

        const ingredientsLeft = document.createElement("ul");
        ingredientsLeft.setAttribute("class", "ingredients-left");

        const ingredientsRight = document.createElement("ul");
        ingredientsRight.setAttribute("class", "ingredients-right");

        for (let i=1;  i<=10; i++) {
            if (this._meal[`strIngredient${i}`] != "" && this._meal[`strIngredient${i}`] != null) {
                const ingredient = this._meal[`strIngredient${i}`];
                const measure = this._meal[`strMeasure${i}`];
                
                const ingredientItem = document.createElement("li");

                ingredientItem.innerHTML = `
                ${ingredient} (<span>${measure}</span>)
                `;

                ingredientsLeft.appendChild(ingredientItem);
            }
        }
        for (let j=11;  j<=20; j++) {
            if (this._meal[`strIngredient${j}`] != "" && this._meal[`strIngredient${j}`] != null) {
                const ingredient = this._meal[`strIngredient${j}`];
                const measure = this._meal[`strMeasure${j}`];
                
                const ingredientItem = document.createElement("li");
                
                ingredientItem.innerHTML = `
                ${ingredient} (<span>${measure}</span>)
                `;

                ingredientsRight.appendChild(ingredientItem);
            }
        }

        this.append(heading, ingredientsLeft, ingredientsRight);
    }
}

customElements.define("ingredients-list", IngredientsList);