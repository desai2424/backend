document.getElementById('generate').addEventListener('click', () => {
    const diet = document.getElementById('diet').value;
    const cuisine = document.getElementById('cuisine').value;
    const servings = document.getElementById('servings').value;

    // Here, you'd make an API call to fetch recipes based on the selected options
    // For now, I'll just show a mock response
    const mockResponse = {
        meal: "Mock Meal",
        ingredients: ["Ingredient 1", "Ingredient 2"],
        nutrients: { carbs: "40g", fats: "20g", protein: "30g" }
    };

    displayMealPlan(mockResponse);
});

function displayMealPlan(data) {
    const planDiv = document.getElementById('meal-plan');
    planDiv.innerHTML = `
        <h2>Meal Plan</h2>
        <p><strong>Meal:</strong> ${data.meal}</p>
        <p><strong>Ingredients:</strong> ${data.ingredients.join(", ")}</p>
        <p><strong>Nutrients:</strong> Carbs: ${data.nutrients.carbs}, Fats: ${data.nutrients.fats}, Protein: ${data.nutrients.protein}</p>
    `;
}
