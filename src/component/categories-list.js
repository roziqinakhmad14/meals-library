class CategoriesList extends HTMLElement {
    constructor() {
        super();
    }
    set search(event) {
        this._search = event;
    }
    connectedCallback() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                this.render(responseJson.categories);  
            });
    }
    render(categories) {
        this.innerHTML="";
        const list = document.createElement("ul");
        categories.forEach(category => {
            const categoryItem = document.createElement("li");
            categoryItem.innerHTML = category.strCategory;

            categoryItem.addEventListener("click", () => {
                this._search(category.strCategory);
            });

            list.appendChild(categoryItem);
        });
        this.appendChild(list);
    }
}

customElements.define("categories-list", CategoriesList);