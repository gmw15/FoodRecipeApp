const APP_ID = 'fa1b01dd';
const APP_KEY = 'ce82eb81c2e3d0c9f457be73b08cdec8';

function searchRecipes() {
    const searchTerm = document.getElementById('searchTerm').value;

    // API Endpoint
    const url = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.hits);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayRecipes(recipes) {
    const list = document.getElementById('recipeList');
    list.innerHTML = ''; // clear the list

    recipes.forEach(item => {
        const recipe = item.recipe;
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${recipe.url}" target="_blank">
                <img src="${recipe.image}" alt="${recipe.label}">
                <p>${recipe.label}</p>
            </a>
        `;
        list.appendChild(li);
    });
}
