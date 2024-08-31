let projectIndex = 0; // Start with the first project
showProject(projectIndex); // Show the initial project

function showProject(index) {
  const projects = document.getElementsByClassName("project");

  // Hide all projects
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }

  // Wrap around logic
  if (index >= projects.length) {
    projectIndex = 0; // Reset to the first project if at the end
  } else if (index < 0) {
    projectIndex = projects.length - 1; // Set to the last project if at the beginning
  } else {
    projectIndex = index; // Set to the valid index
  }

  // Show the current project
  projects[projectIndex].style.display = "block";
}

function navigateProject(direction) {
  showProject(projectIndex + direction); // Navigate through projects
}
