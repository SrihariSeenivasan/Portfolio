// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/resume/Resum_Sri_UI&UX.pdf';  // Correct relative path to your resume file
    link.download = 'Resum_Sri_UI&UX.pdf';     // Set the filename for download
    link.click();
}
// Initialize EmailJS with your User ID (from your EmailJS account)
(function() {
      emailjs.init('maOcV2hd3fJDVKJvw');  // Initialize EmailJS with your public key (User ID)
  })();
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent form from reloading the page
  
      // Collect form data matching EmailJS template variable names
      const formData = {
          from_name: document.getElementById('name').value,  // Matches EmailJS template variable for name
          from_email: document.getElementById('email').value, // Matches EmailJS template variable for email
          message: document.getElementById('message').value   // Matches EmailJS template variable for message
      };
  
      // Send email using EmailJS
      emailjs.send('service_bgmi5569', 'template_ro4kvau', formData)
      .then(function(response) {
          alert('Your message has been sent successfully!');
          document.getElementById('contactForm').reset();
      }, function(error) {
          alert('Oops! Something went wrong, please try again.');
          console.error('Failed to send email:', error);
      });
  });
  

