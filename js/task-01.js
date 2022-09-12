const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories:${itemRef.length}`);
itemRef.forEach(item => {
    const categoryRef = item.querySelector('h2');
    const elemNumberRef = item.querySelectorAll('li');
    console.log(`Category:${categoryRef.textContent}`);
    console.log(`Elements:${elemNumberRef.length}`);
});