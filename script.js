//CONTACT POPUP STUFF
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


// FORM STUFF
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


  