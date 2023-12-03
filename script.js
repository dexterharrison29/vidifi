let currentCategory = null;

function changeBackground(id) {
  const clickedElement = document.getElementById(id);
  
  if (currentCategory !== null) {
    currentCategory.style.backgroundColor = ''; // Reset background color of the previously clicked category
    currentCategory.style.color = ''; // Reset text color of the previously clicked category
  }
  
  clickedElement.style.backgroundColor = 'white'; // Change background color of the clicked category
  clickedElement.style.color = 'black'; // Change text color of the clicked category
  
  currentCategory = clickedElement; // Set current category to clicked category
}