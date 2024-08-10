const heading = React.createElement('h1', { id: 'heading' }, 'I am from React element');


// Rendering inside root with React DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);
