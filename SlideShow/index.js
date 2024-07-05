
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});

document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const hiddenContent = this.nextElementSibling;
      if (hiddenContent.classList.contains('visible')) {
        hiddenContent.classList.remove('visible');
        this.textContent = 'See More';
      } else {
        hiddenContent.classList.add('visible');
        this.textContent = 'See Less';
      }
    });
  });
  
