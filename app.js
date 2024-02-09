document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navigation-wrap");
    
    window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
      } else {
        nav.classList.remove("scroll-on");
      }
    });
  
    let navLinks = document.querySelectorAll(".nav-link"); // Update the selector to ".nav-link"
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navCollapse.classList.remove("show");
      });
    });
  });
  
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start;
    let range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }
  
  counter("count1", 0, 1234, 6432);
  counter("count2", 100, 2934, 9032);
  counter("count3", 50, 1634, 7892);
  counter("count4", 90, 1934, 6732);
  