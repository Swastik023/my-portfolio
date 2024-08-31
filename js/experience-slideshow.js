let experienceIndex = 0;  // Initial index
showExperience(experienceIndex);  // Show the first experience card

function showExperience(index) {
  let experiences = document.getElementsByClassName("experience__card");

  // Hide all experience cards
  for (let i = 0; i < experiences.length; i++) {
    experiences[i].classList.remove("active");
  }

  // Ensure index is within bounds
  if (index >= experiences.length) {
    experienceIndex = experiences.length - 1;  // Set to last index
  } else if (index < 0) {
    experienceIndex = 0;  // Set to first index
  } else {
    experienceIndex = index;  // Set to the valid index
  }

  // Show the current experience card
  experiences[experienceIndex].classList.add("active");

  // Enable or disable navigation arrows based on the current index
  updateNavigationButtons();
}

function navigateExperience(direction) {
  showExperience(experienceIndex + direction);  // Update index and show new card
}

function updateNavigationButtons() {
  const leftArrow = document.querySelector(".experience-arrow.left");
  const rightArrow = document.querySelector(".experience-arrow.right");

  if (experienceIndex === 0) {
    leftArrow.style.display = "none";  // Hide left arrow if at the first card
  } else {
    leftArrow.style.display = "block";  // Show left arrow otherwise
  }

  if (experienceIndex === document.getElementsByClassName("experience__card").length - 1) {
    rightArrow.style.display = "none";  // Hide right arrow if at the last card
  } else {
    rightArrow.style.display = "block";  // Show right arrow otherwise
  }
}
