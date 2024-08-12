// Simple creating element 
const parent2 = React.createElement(
    "div",
    { class: "parent2" },
    "This is from 2nd div"
);

//Nested
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", { id: "heading" }, "I am heading ")
);

const parent3 = React.createElement(
    "div",
    { id: "parent3", class: "parent3", "data-ab": "mydata" },
    React.createElement("div", { id: "row" }, React.createElement("div", { id: "col" }), React.createElement("p", { id: "text" }, 'I am paragram inside row>col>p')));

console.log(parent) // it is an object
// Rendering inside root with React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent, parent2, parent3]);
// if have one node we can simply use like below
// root.render(parent);
