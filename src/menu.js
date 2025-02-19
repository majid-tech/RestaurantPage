// Function for menu button
export function menuBtn() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content

  // Array of food items
  const menuItems = [
    {
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with bacon, eggs, and Parmesan cheese.',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$12.99',
    },
    {
      name: 'Grilled Salmon',
      description: 'Freshly grilled salmon with a side of vegetables.',
      image: 'https://images.unsplash.com/photo-1713561058967-905087ad8e5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$15.99',
    },
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
      image: 'https://plus.unsplash.com/premium_photo-1682097540800-0bb59fa4b91e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$10.99',
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with croutons, Parmesan, and Caesar dressing.',
      image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$8.99',
    },
  ];

  // Create a container for the menu cards
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Loop through the menu items and create cards
  menuItems.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;

    const title = document.createElement('h2');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const price = document.createElement('p');
    price.textContent = item.price;
    price.classList.add('price');

    // Append elements to the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);

    // Append the card to the menu container
    menuContainer.appendChild(card);
  });

  // Append the menu container to the content
  content.appendChild(menuContainer);
}