const filterData = (searchBy, keyword) => {
    return requestData(searchBy, keyword)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        });
};

const requestData = (searchBy, keyword) => {
    const baseURL = "https://www.themealdb.com/api/json/v1/1/";
    if (searchBy==="category") {
        return fetch(`${baseURL}filter.php?c=${keyword}`);
    } else if (searchBy==="name") {
        return fetch(`${baseURL}search.php?s=${keyword}`);
    } else if (searchBy==="id") {
        return fetch(`${baseURL}lookup.php?i=${keyword}`);
    }
};

export default filterData;