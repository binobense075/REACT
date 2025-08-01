const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "i'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", style: { fontSize: "30px", fontStyle: "italic" } },
  "Hello-World from React!"
);

console.log(parent); // This is a React element, which is just a plain JavaScript object representing the UI.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// This root.render method takes the React element (a JS object) and convert it into actual DOM nodes that the browser can understand and renders it inside the element with id 'root'.

// To solve nested tag we have jsx.