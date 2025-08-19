const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Contact Form Submit Handler
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      this.reset();
    });
    
    // Modal Contact Form Submit Handler
    document.getElementById("modalContactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your enquiry! We will contact you with more details.");
      this.reset();
      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('enquiryModal'));
      modal.hide();
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').style.padding = '10px 0';
        document.querySelector('.navbar').style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      } else {
        document.querySelector('.navbar').style.padding = '15px 0';
        document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });