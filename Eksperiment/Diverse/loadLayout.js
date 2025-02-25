document.addEventListener("DOMContentLoaded", function () {
  function loadHTML(target, file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(target).insertAdjacentHTML("beforeend", data);
      })
      .catch((error) => console.error("Error loading file:", error));
  }

  // Load <head> content
  loadHTML("head", "../Diverse/head.html");

  // Load header and footer if they exist
  if (document.getElementById("header")) {
    loadHTML("#header", "../Diverse/header.html");
  }
  if (document.getElementById("footer")) {
    loadHTML("#footer", "../Diverse/footer.html");
  }
});
