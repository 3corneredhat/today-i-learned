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
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I learned Logo" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}
export default App;
