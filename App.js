const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello this is react heading"),
    React.createElement("h2", {}, "hello this h2 is react heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello this is react heading"),
    React.createElement("h2", {}, "hello this h2 is react heading"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
