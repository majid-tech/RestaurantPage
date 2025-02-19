// Function for home button
export function homeBtn() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
  
    container.innerHTML = `
      <h1>Welcome to our restaurant</h1>
      <p>Our restaurant offers a wide variety of dishes, from traditional to modern cuisine.
      We have a team of experienced chefs who will make sure you have the best dining experience.
      We have a cozy atmosphere and friendly staff that will make you feel at home. 
      Come and visit us today!</p>
    `;
  
    content.innerHTML = ''; // Clear existing content
    content.appendChild(container);
  }