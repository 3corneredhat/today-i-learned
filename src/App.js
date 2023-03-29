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

//Uppercase letter of a function indicates a component.
function App() {
  /*The following is not HTML, it is JSX, a syntax that
  React created so that we are able to write React components.
  In JSX we cannont use the word 'class' as it is a reserved word.
  JSX expressions must have one parent element.
  React will look in Public folder for items.*/
  const appTitle = "Today I Learned";
  return (
    /* '<>' is called a fragment, we used it because without it
    we return two objects. This packages the objects into one 
    without adding unneccessary elements to the html.*/
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside> Category filter </aside>;
}

function FactList() {
  const facts = initialFacts;
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
