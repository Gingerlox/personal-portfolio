// Get elements
const trigger = document.getElementById('trigger');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-btn');
const wrapper = document.getElementById('wrapper');

// Show popup on click
trigger.addEventListener('click', function() {
  popup.style.visibility = 'visible';  // Make the popup visible
  popup.style.opacity = '1';  // Start the fade-in
  wrapper.style.filter = 'blur(10px)';  // Blur the background
});

// Close popup on close button click
closeButton.addEventListener('click', function() {
  popup.style.opacity = '0';  // Start the fade-out
  wrapper.style.filter = 'blur(0)';  // Remove the blur

  // Delay setting visibility to hidden until fade-out completes
  setTimeout(function() {
    popup.style.visibility = 'hidden';
  }, 100);  
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
  if (!popup.contains(event.target) && event.target !== trigger) {
    popup.style.opacity = '0';  // Start the fade-out
    wrapper.style.filter = 'blur(0)';  // Remove the blur

    // Delay setting visibility to hidden until fade-out completes
    setTimeout(function() {
      popup.style.visibility = 'hidden';
    }, 100); 
  }
});

  