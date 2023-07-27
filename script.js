// Run this when the user accepts the cookie policy
localStorage.setItem('cookiePolicyAccepted', 'true');

// Check if the user has accepted the policy
if (localStorage.getItem('cookiePolicyAccepted') === 'true') {
    // Hide the cookie policy banner
    document.getElementById('cookiePolicyBanner').style.display = 'none';
  }
  