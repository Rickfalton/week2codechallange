// We declare html elements for later interaction with them
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');
const clearButton = document.getElementById('clear-button');

// This function renders the list
function renderList(items) {
    shoppingList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.classList.toggle('bought', item.purchased);

        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            renderList(items);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const newName = prompt('Edit item name:', item.name);
            if (newName) {
                item.name = newName;
                renderList(items);
            }
        });

        li.appendChild(editButton);
        shoppingList.appendChild(li);
    });
}

// Function adding a new item
addButton.addEventListener('click', () => {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        const newItem = { name: itemName, purchased: false };
        items.push(newItem);
        itemInput.value = '';
        renderList(items);
    }
});

// Function to clear the list
clearButton.addEventListener('click', () => {
    items = [];
    renderList(items);
});

// Initialize an empty list
let items = [];

// Initial render of the list
renderList(items);
