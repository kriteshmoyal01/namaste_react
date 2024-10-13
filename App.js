// Define the parent element with an id of "parents"
const parents = React.createElement(
  "div",
  { id: "parents" }, // Corrected syntax
  React.createElement(
    "div",
    { id: "child" }, // Corrected syntax
  //array
    [React.createElement("h1", {}, "I'm a h1 tag"),React.createElement("h1", {}, "I'm a h2 tag")]
  ),
  React.createElement(
    "div",
    { id: "child2" }, // Corrected syntax
  //array
    [React.createElement("h1", {}, "I'm a h1 tag"),React.createElement("h1", {}, "I'm a h2 tag")]
  )
);

//jsx


// App.js
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello Kartik from JS");

console.log(parents); // This will log the parents object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parents);
