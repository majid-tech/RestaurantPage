// Function for contact button
export function contactBtn() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    content.innerHTML = ''; // Clear existing content
    content.appendChild(container);
    
    container.innerHTML = `
      <h1>Contact Us</h1>
      <p>Email: info@restaurant.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street, City, Country</p>
    `;
  }