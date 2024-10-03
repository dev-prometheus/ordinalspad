document.addEventListener('DOMContentLoaded', function () {
    const projectsBtn = document.getElementById('projectsBtn');
    const projectDropdown = document.getElementById('projectDropdown');
    const iconToggle = document.getElementById('iconToggle');

    // menu buttons
    const menuBtn = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');

    //menu project container
    const menuProjectsBtn = document.getElementById('menuProjectsBtn');
    const menuProjectDropdown = document.getElementById('menuProjectDropdown');
    const menuIconToggle = document.getElementById('menuIconToggle');


    // Toggle dropdown visibility and icon change on button click
    projectsBtn.addEventListener('click', function () {
        projectDropdown.classList.toggle('show'); // Toggle dropdown visibility

        // Toggle the icon between up and down
        if (iconToggle.innerHTML.includes('fa-angle-down')) {
            iconToggle.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
        } else {
            iconToggle.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        }
    });

    // Toggle dropdown visibility and icon change on menu button click
    menuBtn.addEventListener('click', function () {
        menuDropdown.classList.toggle('menu-show'); // Toggle menu dropdown visibility
    });

    // Toggle dropdown visibility and icon change on button click
    menuProjectsBtn.addEventListener('click', function () {
        menuProjectDropdown.classList.toggle('project-show'); // Toggle dropdown visibility

        // Toggle the icon between up and down
        if (menuIconToggle.innerHTML.includes('fa-angle-down')) {
            menuIconToggle.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
        } else {
            menuIconToggle.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        }
    });

    // Close the dropdown if clicked outside of it
    document.addEventListener('click', function (e) {
        if (!projectsBtn.contains(e.target) && !projectDropdown.contains(e.target)) {
            projectDropdown.classList.remove('show');
            iconToggle.innerHTML = '<i class="fa-solid fa-angle-down"></i>'; // Reset icon
        }

        if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
            menuDropdown.classList.remove('menu-show'); // Toggle menu dropdown visibility
        }

        if (!menuProjectsBtn.contains(e.target) && !menuProjectDropdown.contains(e.target)) {
            menuProjectDropdown.classList.remove('project-show'); // Toggle menu dropdown visibility
            menuIconToggle.innerHTML = '<i class="fa-solid fa-angle-down"></i>'; // Reset icon
        }
    });

});  