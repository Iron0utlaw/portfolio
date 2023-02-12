import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));

const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}