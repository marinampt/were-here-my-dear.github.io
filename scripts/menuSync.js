var topTarget = document.getElementById("top-target");
var targets = Array.from(document.querySelectorAll("[data-color]"));
var navBar = document.querySelector(".menu-bar");
var sectionName = document.querySelector(".section-name");

var body = document.querySelector("body");
var logoElements = Array.from(document.querySelectorAll(".cls-1"));
var emailInput = document.querySelector(".email");
var links = Array.from(document.querySelectorAll(".link"));
var doodles = document.querySelectorAll(".doodle");
var closeIcon = document.getElementById("close-icon");

syncBodyColorToViewportSection(body, targets);

if (window.innerWidth < 768) {
  showMobileMenuBarOnScroll(topTarget);
}

function syncBodyColorToViewportSection(body, elements) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries
        .filter(function (entry) {
          return entry.isIntersecting;
        })
        .forEach(function (entry) {
          var sectionColor = entry.target.dataset.color;

          body.style.color = sectionColor;
          emailInput.style.borderColor = sectionColor;

          logoElements.forEach(function (logoElement) {
            logoElement.style.fill = sectionColor;
          });

          links.forEach(function (link) {
            link.style.borderColor = sectionColor;
          });

          sectionName.textContent = entry.target.id;

          closeIcon.style.fill = sectionColor;

          doodles.forEach(function (doodle) {
            doodle.querySelectorAll("g").forEach(function (group) {
              group.querySelectorAll("path").forEach(function (path) {
                path.style.fill = sectionColor;
              });
            });
          });
        });
    },
    {
      rootMargin: "-50% 0% -50% 0%",
    }
  );

  elements.forEach(function (element) {
    observer.observe(element);
  });
}

function showMobileMenuBarOnScroll(topTarget) {
  navBar.style.display = "none";
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navBar.style.display = "none";
        } else {
          navBar.style.display = "flex";
        }
      });
    },
    {
      rootMargin: "0% 0% -80% 0%",
    }
  );

  observer.observe(topTarget);
}