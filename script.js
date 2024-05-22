document.getElementById('add-recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value.split('\n');
    const method = document.getElementById('recipe-method').value;

    displayRecipe({
        name,
        ingredients,
        method
    });

    document.getElementById('add-recipe-form').reset();
});




function displayRecipe(recipe) {
    const recipeList = document.getElementById('recipe-list');
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';
    recipeDiv.dataset.index = recipeList.childElementCount; 

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = recipe.name;
    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    const methodParagraph = document.createElement('p');
    methodParagraph.textContent = recipe.method;

    recipeDiv.appendChild(nameHeading);
    recipeDiv.appendChild(ingredientsList);
    recipeDiv.appendChild(methodParagraph);

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit'); 
    editButton.addEventListener('click', () => {
      
        console.log(`Editing recipe ${recipeDiv.dataset.index}`);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        recipeDiv.remove();
    });

    recipeDiv.appendChild(editButton);
    recipeDiv.appendChild(deleteButton);

    recipeList.appendChild(recipeDiv);
}


document.getElementById('recipe-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
    
        console.log(`Editing recipe ${event.target.closest('.recipe').dataset.index}`);

    }
});