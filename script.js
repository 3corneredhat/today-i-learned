const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
console.dir(btn);

//This line clears the fact list
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    //await will pause the exec. of code until a promise is returned
    //await can only be used on functions that return promises
    "https://xtlotfjpzlkaqqjpwydr.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bG90ZmpwemxrYXFxanB3eWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MDIxNTAsImV4cCI6MTk5NTE3ODE1MH0.8xZR-EVQYhM7vtfaPbpS_BUFaSVGR2Gu10ABP5NeiiI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bG90ZmpwemxrYXFxanB3eWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MDIxNTAsImV4cCI6MTk5NTE3ODE1MH0.8xZR-EVQYhM7vtfaPbpS_BUFaSVGR2Gu10ABP5NeiiI",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>${fact.text}
        <a
          class = "source"
          href=${fact.source}
          target="_blank"
        >(Source)</a>
       </p>
      <span 
        class = "tag"
        style = "background-color: #3b82f6">
        ${fact.category}
        </span>
    </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Vanilla JS method of manipulating the DOM
// factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

//Toggle form visibility
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
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less
  or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2052));
//Arrow function
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less 
  or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));*/

/*let votesInteresting = 20;
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
const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();

console.log(upperText);

/*This is a template literal and needs to 
be in this format: "${variable}"*/

/*
const str = `The current fact is "${text}". It is "${calcFactAge(
  2015
)}" years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}`;
console.log(str);*/

/*
const fact = ["Lisbon is the capital of Portugal", 2015, true, 69, "yoo-hoo"];
console.log(fact);
console.log(fact.length);
console.log(fact[fact.length - 1]);

//destructuring method of initializing variables
const [text, createdIn] = fact;
console.log(createdIn);

//spreading method will unpack an array
const newFact = [...fact, "society"];
console.log(newFact);

//objects
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);

console.log(factObj.createSummary());

//iterate over array
// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });
//map method
// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
const time10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(time10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less
  or equal ${currentYear}`;
}
const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));*/
