/*
 * All JS in this file will be run on any pages that match the pattern defined in manifest.
 */

// This template triggers a styled console.log in the console when you visit google.com
window.onload = function () {
  console.log(
    "%cHello from your Chrome extension!",
    "color: #fff; background: red; font-size: 20px; padding: 5px;"
  );

  // Find the "Code" button
  const codeButton = document.querySelector(
    "#dropdown-toggle-btn-48 > span > span"
  );

  if (codeButton) {
    // Get the button's text, if present, trim it, and convert it to lowercase
    const codeButtonText = codeButton.innerText.trim().toLowerCase();
    // Check if the button text is "code"
    if (codeButtonText === "code") {
      console.log("Code button text is 'Code'");

      // Get the dropdown menu's open in editor section
      const openInEditor = document.querySelector(
        "#disclosure-49 > li:nth-child(3) > ul"
      );

      // Find the "Open in your IDE" section
      const ideSection = document.querySelector(
        'div[id^="gl-disclosure-dropdown-group-"] + ul'
      );

      if (openInEditor) {
        // Create a new list item for the Eclipse link
        const eclipseListItem = document.createElement("li");
        eclipseListItem.tabIndex = 0;
        eclipseListItem.dataset.testid = "disclosure-dropdown-item";
        eclipseListItem.className = "gl-new-dropdown-item";

        const eclipseLink = document.createElement("a");
        eclipseLink.tabIndex = -1;
        eclipseLink.href = "#";
        eclipseLink.target = "_self";
        eclipseLink.className = "gl-new-dropdown-item-content";
        eclipseLink.innerHTML =
          '<span class="gl-new-dropdown-item-text-wrapper">Open in Eclipse</span>';
        eclipseLink.onclick = function () {
          // Get the repository URL
          const repoUrl = window.location.href.replace(/\/$/, "");
          // Create the custom protocol URL
          const eclipseUrl = `eclipse://${repoUrl}`;
          // Open the URL
          window.location.href = eclipseUrl;
        };

        // Append the link to the list item
        eclipseListItem.appendChild(eclipseLink);
        // Append the list item to the existing IDE section
        openInEditor.appendChild(eclipseListItem);
      }
    }
  }
};
