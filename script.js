document.getElementById('generate').addEventListener('click', () => {
    const diet = document.getElementById('diet').value;
    const cuisine = document.getElementById('cuisine').value;
    const servings = document.getElementById('servings').value;

    // Construct the API URL
    // This example uses Recipe Puppy; adjust as necessary for your chosen API
    let apiUrl = `http://www.recipepuppy.com/api/?i=${diet}&q=${cuisine}`;

    // Fetch recipes from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the first result for simplicity
            // Adjust based on the API's response structure
            displayMealPlan(data.results[0]);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
});

function displayMealPlan(recipe) {
    const planDiv = document.getElementById('meal-plan');
    planDiv.innerHTML = `
        <h2>${recipe.title}</h2>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <a href="${recipe.href}" target="_blank">View Recipe</a>
    `;
}

// Display a default meal plan on initial load (optional)
window.onload = () => {
    // Call your API or display a default meal plan
};
