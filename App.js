import React from "react";
import ReactDOM from "react-dom/client";

const element = <span className="span">Hi I am an element n JSX</span>;

const Title = () => {
    return <h1 tabIndex={1} className="title">Namstey React {element}</h1>;
};

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1>This is React Compoent </h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
