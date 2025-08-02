import React from "react";
import ReactDOM from "react-dom/client";

// React Component
const Heading = ({ name }) => (
  <div>
    <h1 id="heading"> {name} </h1>
    {subheading}
  </div>
);

// Component composition -- combining two components
const Title = () => {
  return (
    <div>
      <h1>AZAZEL</h1>
      <Heading name="Bino Bense" />
    </div>
  );
};

function NormalFn() {
  return <h1>{(onerror = alert("XSS"))}</h1>;
}

// React Element
const parentTitle = (
  <div>
    <h1>Hey This the parent continer using react element</h1>
    <Title />
    {NormalFn()}
  </div>
);

const subheading = <h1>this is subheading using React element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentTitle);
