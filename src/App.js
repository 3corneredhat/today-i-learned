import { useEffect, useState } from "react";
import supabase from "./supabase";

import "./styles.css";
/*In react, everything is JS. The code we write is JS
and HTML is inserted into it. We are inserting everything
in the index.html class "root". */

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

function Counter() {
  //Use state returns a count and a function
  const [count, setCount] = useState(8);

  return (
    <div>
      <span style={{ fonstSize: "40px" }}>{count}</span>
      {/* The callback function to setCount increments */}
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}

//Uppercase letter of a function indicates a component.
function App() {
  /*The following is not HTML, it is JSX, a syntax that
  React created so that we are able to write React components.
  In JSX we cannont use the word 'class' as it is a reserved word.
  JSX expressions must have one parent element.
  React will look in Public folder for items.*/

  // Whenever we want to change something on the screem
  // we need to use a state variable.
  // 1. defining a state variable
  const [showForm, setShowForm] = useState(false);

  //State for facts that is used for submitting a new fact and
  //for displaying stored facts.
  const [facts, setFacts] = useState([]);

  useEffect(function () {
    async function getFacts() {
      const { data: facts, error } = await supabase.from("facts").select("*");
      setFacts(facts);
    }
    getFacts();
  }, []);

  return (
    /* '<>' is called a fragment, we used it because without it
    we return two objects. This packages the objects into one 
    without adding unneccessary elements to the html.*/
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {/* 2. Using the state variable. */}
      {showForm ? <NewFactForm setFacts={setFacts} /> : null}

      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} setShowForm={setShowForm} />
      </main>
    </>
  );
}

function Header({ showForm, setShowForm }) {
  const appTitle = "Today I Learned";
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I learned Logo" />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        // 3. Update the state variable.
        // With onClick you always need to give is a function,
        // thus we use the arrow function.
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  //create new states to update the input field of the form
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(e) {
    // 1. prevent broswer reload
    e.preventDefault();
    console.log(text, source, category);

    // 2.check if data is valid and if so, create a new fact.
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      // 3. create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 1000000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      // 4. Add the new fact to the UI: add the fact to state.

      // To set a new state using the old state,
      // i.e. adding a new fact to the list of
      // facts and rendering them again.
      setFacts((facts) => [newFact, ...facts]);

      // 5. Reset input fields
      setText("");
      setSource("");
      setCategory("");
      // 6. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        // Set an event handler when the input field is selected
        // The rendered value will update the 'text' value in the
        // state which is then rerendered in the browser
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {/* We will loop through the Categories array and
        make buttons for them. */}
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactList({ facts }) {
  return (
    <section>
      <ul className="facts-list">
        {
          //loop over the facts using the map method.
          facts.map((fact) => (
            /*For each fact object, create a Fact component
            to be rendered. We give it the 
             */
            <Fact key={fact.id} fact={fact} />
          ))
        }
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
}
//https://react.dev/learn/passing-props-to-a-component

/*
The fact function creates the fact component. It is a 
child component of FactList.
@param 'fact' is each item in the initialFacts 
        array. Data passed as an argument is
         referred to as 'props' object.
@return a list element or fact component.   */
function Fact({ fact }) {
  /*Destructuring the object that is passed so that
  it is easier to get/call it's attributes */
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      {/* We use nested curly braces for the style: 1 set 
              to indicate Javascript and 1 set to indicate an object. */}
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}
export default App;
