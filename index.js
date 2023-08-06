window.onload = () => {
    const rootElement = document.getElementById("root");

    // const button = document.createElement("button");
    // button.innerHTML = "Click me for current date"
    // button.addEventListener("click", () => {
    //     button.innerHTML = new Date().toString();
    // })
    // rootElement.appendChild(button);

    // ! Modify our JavaScript to:
    // ! Using simple DOM calls to iterate over a list of numbers
    // ! Render that list to a browser

    
    const root = ReactDOM.createRoot(rootElement);
    
    const ints = [1, 2, 3];

    const childrenElements = [];

    childrenElements.push(
        React.createElement("li", { key: ints[0] }, ints[0])
    );

    childrenElements.push(
        React.createElement("li", { key: ints[1] }, ints[1])
    );

    childrenElements.push(
        React.createElement("li", { key: ints[2] }, ints[2])
    );

    root.render(childrenElements);
};

