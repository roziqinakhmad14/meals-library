import "../component/search-bar.js";
import "../component/meals-display.js";
import "../component/meal-detail.js";
import "../component/categories-list.js";
import filterData from "./filterData.js";

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const mealsDisplay = document.querySelector("meals-display");
    const mealDetail = document.querySelector("meal-detail");
    const categoriesList = document.querySelector("categories-list");
    const searchTitle = document.querySelector("h2");
    
    const searchMealById = id => {
        mealsDisplay.innerHTML = "";
        filterData("id", id)
            .then(result => {
                searchTitle.innerHTML = result[0].strMeal;
                mealDetail.meal = result[0];
            });
    };
    const searchMealByName = keyword => {
        mealDetail.innerHTML = "";
        searchTitle.innerHTML = keyword;
        filterData("name", keyword)
            .then(results => {
                renderLibrary(results);
            })
            .catch(message => {
                renderError(message);
            });
    };
    const searchMealByCategory = category => {
        mealDetail.innerHTML = "";
        searchTitle.innerHTML = category;
        filterData("category", category)
            .then(results => {
                renderLibrary(results);
            })
            .catch(message => {
                renderError(message);
            });
    };
    
    const renderLibrary = results => {
        mealsDisplay.meals = results;
    };
    const renderError = message => {
        mealsDisplay.renderError(message);
    };

    mealsDisplay.search = searchMealById;
    searchBar.search = searchMealByName;
    categoriesList.search = searchMealByCategory;
};

export default main;