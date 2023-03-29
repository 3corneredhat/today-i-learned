import "./styles.css";
/*In react, everything is JS. The code we write is JS
and HTML is inserted into it. We are inserting everything
in the index.html class "root". */

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
  return <section>Facts List</section>;
}
export default App;
