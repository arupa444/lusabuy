document.addEventListener('DOMContentLoaded', function () {
    // Function to handle sticky header behavior on scroll
    function handleScroll() {
        const navbar = document.querySelector('.navbar');
        const navbarNav = document.querySelector('#navbarNav');
        const inviBefore = document.querySelector('.inviBefore');
        const inviAfter = document.querySelector('.inviAfter');
        const navLink = document.querySelectorAll('.nav-link');
        const searchStick = document.querySelector('.searchStick');
        const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
        if( window.innerWidth > 992 ){
            if (window.scrollY > 50) {
                navbar.classList.add('d-flex');
                navbar.classList.add('justify-content-center');
                navbar.classList.remove('flex-column');
                inviBefore.classList.add('d-none');
                inviAfter.classList.remove('d-none');
                navbarNav.classList.remove('navbar-collapse');
                navbarNav.classList.remove('collapse');
                navbarNav.classList.add('d-flex');
                navbarNav.classList.add('justify-content-between');
                navbarNav.classList.add('align-items-center');
                navbarNav.classList.add('ps-4');
                searchStick.style.top = "20vh";
                navLink.forEach((ele)=>{
                    ele.classList.remove('theColorForLusaNavBefore');
                    ele.classList.add('theColorForLusaNavAfter');
                });
            } else {
                navbar.classList.remove('d-flex');
                navbar.classList.remove('justify-content-center');
                navbar.classList.add('flex-column');
                inviBefore.classList.remove('d-none');
                inviAfter.classList.add('d-none');
                navbarNav.classList.add('navbar-collapse');
                navbarNav.classList.add('collapse');
                navbarNav.classList.remove('d-flex');
                navbarNav.classList.remove('justify-content-between');
                navbarNav.classList.remove('align-items-center');
                navbarNav.classList.remove('ps-4');
                searchStick.style.top = "17vh";
                navLink.forEach((ele)=>{
                    ele.classList.add('theColorForLusaNavBefore');
                    ele.classList.remove('theColorForLusaNavAfter');
                });
            }
        }else{
                navLink.forEach((ele)=>{
                    ele.classList.add('theColorForLusaNavBefore');
                    ele.classList.remove('theColorForLusaNavAfter');
                });
                inviAfter.classList.add('d-none');
                searchStick.style.top = "10vh";
        }
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Call it once to set initial state
});
function contactAndDonate() {
  let onWhenScreenStore = document.querySelectorAll(".onWhenScreen");
  let offWhenScreenStore = document.querySelectorAll(".offWhenScreen");
  let dropAfter415 = document.querySelectorAll(".dropdown-menu");

  if (window.innerWidth <= 992) {
    // Small screen
    document
      .querySelector(".someAlignmentRequire")
      .classList.add("flex-column");
    document
      .querySelector(".someAlignmentRequire")
      .classList.add("flex-column-reverse");
    document
      .querySelector(".someAlignmentRequire")
      .classList.remove("align-items-center");
    document.querySelector(".someAlignmentRequire").classList.remove("ms-5");
    document.querySelector(".someAlignmentRequire").classList.remove("me-5");
    document.querySelector(".someAlignmentRequire").classList.add("ms-3");
    document.querySelector(".someAlignmentRequire").classList.add("me-3");
    document
      .querySelector(".someAlignmentRequireTopPart")
      .classList.add("pb-2");
    document.querySelector(".someLessPaddingMob").classList.add("pt-2");
    document.querySelector(".someLessPaddingMob").classList.add("pb-3");
    document.querySelector(".subForMob").classList.add("pt-0");
    document.querySelector(".subForMob").classList.add("pb-0");

    dropAfter415.forEach((ele) => {
      ele.classList.add("dropdown-menu-end");
    });
    document.querySelectorAll(".justSideDropEnd").forEach((ele)=>{
        ele.classList.remove("dropend");
    });
    // Show only the first item
    onWhenScreenStore.forEach((ele) => {
      ele.classList.remove("d-none");
    });
    offWhenScreenStore.forEach((ele) => {
      ele.classList.add("d-none");
    });
  } else {
    document
      .querySelector(".someAlignmentRequire")
      .classList.remove("flex-column");
    document
      .querySelector(".someAlignmentRequire")
      .classList.remove("flex-column-reverse");
    document
      .querySelector(".someAlignmentRequire")
      .classList.add("align-items-center");
    document.querySelector(".someAlignmentRequire").classList.add("ms-5");
    document.querySelector(".someAlignmentRequire").classList.add("me-5");
    document.querySelector(".someAlignmentRequire").classList.remove("ms-3");
    document.querySelector(".someAlignmentRequire").classList.remove("me-3");
    document
      .querySelector(".someAlignmentRequireTopPart")
      .classList.remove("pb-2");
    document.querySelector(".someLessPaddingMob").classList.remove("pt-2");
    document.querySelector(".someLessPaddingMob").classList.remove("pb-3");
    document.querySelector(".subForMob").classList.remove("pt-0");
    document.querySelector(".subForMob").classList.remove("pb-0");

    dropAfter415.forEach((ele) => {
      ele.classList.remove("dropdown-menu-end");
    });
    document.querySelectorAll(".justSideDropEnd").forEach((ele)=>{
        ele.classList.add("dropend");
    });
    document
      .querySelectorAll(".add_dropdown_menu_end").forEach((ele)=>{
        ele.classList.add("dropdown-menu-end");
      });
    // Show only the first item
    onWhenScreenStore.forEach((ele) => {
      ele.classList.add("d-none");
    });
    offWhenScreenStore.forEach((ele) => {
      ele.classList.remove("d-none");
    });
  }
}

contactAndDonate();
window.addEventListener("resize", contactAndDonate);

document.addEventListener("DOMContentLoaded", function () {
  // Existing code for general dropdown handling...
  var dropdownSubmenus = document.querySelectorAll(".dropend");

  dropdownSubmenus.forEach(function (submenu) {
    submenu
      .querySelector(".dropdown-toggle")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        var submenuDropdownMenu = submenu.querySelector(".dropdown-menu");
        if (submenuDropdownMenu.classList.contains("show")) {
          submenuDropdownMenu.classList.remove("show");
        } else {
          document
            .querySelectorAll(".dropend .dropdown-menu")
            .forEach(function (el) {
              el.classList.remove("show");
            });
          submenuDropdownMenu.classList.add("show");
        }
      });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropend .dropdown-menu").forEach(function (el) {
      el.classList.remove("show");
    });
  });


    const interviewsDropdownLink = document.getElementById('interviewsDropdown');
      interviewsDropdownLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 992) {
          event.preventDefault();
          event.stopPropagation();
          const interviewsDropdownMenu = this.nextElementSibling;
          interviewsDropdownMenu.classList.toggle('show');
        }
      });
  // NEW CODE END
});
window.onload = function () {
  if (!sessionStorage.getItem("modalShown")) {
    var myModal = new bootstrap.Modal(
      document.getElementById("subscribeModal"),
      {
        keyboard: false,
      }
    );
    myModal.show();

    sessionStorage.setItem("modalShown", "true");
  }
};

function showOverlay() {
  document.getElementById("pink-overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("pink-overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResultsContainer = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    searchResultsContainer.innerHTML = ""; // Clear previous results
    searchResultsContainer.style.display = "none"; // Hide the results container

    if (searchTerm.length < 3) {
      // Don't search for very short terms
      return;
    }

    // Get all anchor elements (links)
    const allLinks = document.body.querySelectorAll("a");

    const linkResults = [];

    allLinks.forEach((link) => {
      const linkText = link.innerText.toLowerCase();
      if (linkText.includes(searchTerm)) {
        linkResults.push({
          href: link.href,
          text: link.innerText,
        });
      }
    });

    if (linkResults.length > 0) {
      searchResultsContainer.style.display = "block"; // Show the results container
      const resultsList = document.createElement("ul");
      linkResults.forEach((result) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = result.href;
        link.textContent = result.text;
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
      });

      searchResultsContainer.appendChild(
        document.createElement("h3")
      ).textContent = `Found ${linkResults.length} matches:`;
      searchResultsContainer.appendChild(resultsList);
    } else {
      searchResultsContainer.style.display = "block"; // Show the results container
      searchResultsContainer.appendChild(
        document.createElement("p")
      ).textContent = "No results found.";
    }
  });
});

// Add the script to change the nav-item style on dropdown open
document.addEventListener("DOMContentLoaded", function () {
  const dropdownElements = document.querySelectorAll(".nav-item.dropdown"); // Select all dropdown nav-items

  dropdownElements.forEach(function (dropdown) {
    dropdown.addEventListener("shown.bs.dropdown", function () {
      // This function is called *after* the dropdown is shown.
      this.classList.add("active-dropdown"); // Add a class to the nav-item
      //this.style.backgroundColor = '#f0f0f0'; // Change background color, for example
    });

    dropdown.addEventListener("hidden.bs.dropdown", function () {
      // This function is called *after* the dropdown is hidden.
      this.classList.remove("active-dropdown"); // Remove the added class
      //this.style.backgroundColor = '';       // Reset the background color
    });
  });
});