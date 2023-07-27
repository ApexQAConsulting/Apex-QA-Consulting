// Check if the user has already accepted the cookie policy
if (localStorage.getItem('cookiePolicyAccepted') === 'true') {
    // If they have, hide the cookie banner
    document.getElementById('cookie-popup').style.display = 'none';
  }
  
  // If the user clicks the "Accept" button
  document.getElementById('accept-cookies').onclick = function() {
    // Hide the cookie banner
    document.getElementById('cookie-popup').style.display = 'none';
    // And store their acceptance in localStorage
    localStorage.setItem('cookiePolicyAccepted', 'true');
  };