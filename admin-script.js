
// JavaScript for Admin Dashboard

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Add event listener to menu button to toggle sidebar visibility
  document.getElementById('menu-btn').addEventListener('click', toggleSidebar);
  
  // Function to handle navigation links
  function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  // Add event listeners to navigation links
  document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      navigateToSection(sectionId);
    });
  });
  