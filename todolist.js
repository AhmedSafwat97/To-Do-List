const button = document.querySelector("button");
const input = document.querySelector("input");
const area = document.getElementById("area");
const form = document.querySelector("form");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `      <div class="task">
  <span class="icon-star icon"></span>
  <p class="text">${input.value}</p> 

  <div>
    <span class="icon-trash-o icon"></span>
    <span class="icon-angry2 icon"></span>
  </div>
</div>`;
  //  to add a tasks when you click
  area.innerHTML += task;
  input.value = "";
});

area.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart icon"></span>`;

    eo.target.parentElement.innerHTML += heart;
    eo.target.parentElement.parentElement
      .getElementByClassName("text")[1]
      .classList.add("done");
  } else if (eo.target.className == "icon-heart icon") {
    eo.target.classList.add("dn");
    const angry = `<span class="icon-angry2 icon"></span>`;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("orange");
    area.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.remove("orange");
  }
});

let x = 1;
function ahmed() {
  x = x + 2;
}
console.log(x);

let club = ["real madrid", "ac milan", "man united", "man city", "liverpool"];
// the number of the end "NOT INCLUDING THE END INDEX"
console.log(club.slice(1));
console.log(club.slice(1, 3));
console.log(club.slice(3));
console.log(club.slice(-2));
console.log(club.slice(-4, -1));
// slice return a new array
console.log(club);

// useing splice we can add and remove index from the array

club.splice(0, 0, "zamalek", "psg");
console.log(club);

club.splice(3, 2, "arsnal", "dortmond");
console.log(club);
