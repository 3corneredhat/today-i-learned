console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// /* 'let' is for variables that are able to be updated
// later*/
// let votesInteresting = 23;
// let votesMindblowing = 5;

// /* 'const' are for variables that will remain constant
// or will not be changed later on */
// const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindblowing;

// console.log("Upvotes:", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;

// console.log(isCorrect);

/*Lecture 36*/

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return "Impossible year";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2052));

let votesInteresting = 20;
let votesMindblowing = 20;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting Fact");
} else if (votesInteresting < votesMindblowing) {
  console.lof("Mindblowing fact!!");
}

//falsy 0 , '', null, undefined
//truthy value: everything else...
if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources...";

// alert(message);
