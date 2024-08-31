<script>
  // Smooth scrolling for Experience section
  const scrollAmount = 200; // Set the amount to scroll
  const experienceSection = document.querySelector('#grid__tr__content');

  // Scroll Down
  document.getElementById('scroll-down').addEventListener('click', function() {
    experienceSection.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Scroll Up
  document.getElementById('scroll-up').addEventListener('click', function() {
    experienceSection.scrollBy({
      top: -scrollAmount,
      behavior: 'smooth'
    });
  });
</script>
