const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const elements = ingredients.map(ingredient => {
    const itemsRef = document.createElement('li');

    itemsRef.textContent = `${ingredient}`;
    itemsRef.classList.add('item');

    return itemsRef;
});

const listRef = document.querySelector('#ingredients');
listRef.append(...elements);

console.log(listRef);