import { lastname } from "./index.js";
const bar = document.querySelector(".toggle");
const menu = document.querySelector(".span");
new Promise(function (resolved, reject) {
  if (Math.random() >= 0.5) {
    resolved("you win 💥");
  } else {
    reject("you lost your money");
  }
});

const a = 3;
const b = 5;
function me(year) {
  let age = 2013 - year;
  console.log(firstname);
  return age;
}
const firstname = function (name) {
  return 2000 - name;
};
const first = firstname(23);
console.log(first);
console.log(lastname);
bar.addEventListener("click", function () {
  menu.classList.toggle("active");
});
