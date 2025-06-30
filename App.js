// const heading = React.createElement("h1", {}, "Hello World by React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const hello1 = React.createElement("h1", {id: "child1"}, "Hello World 1");
const hello2 = React.createElement("h1", {id: "child2"}, "Hello World 2", React.createElement('h3', {id: "child3"}, "Mini World"));

const parent = React.createElement('div',{}, [hello1, hello2]);

const rootNew = ReactDOM.createRoot(document.getElementById('root'));

rootNew.render(parent);
