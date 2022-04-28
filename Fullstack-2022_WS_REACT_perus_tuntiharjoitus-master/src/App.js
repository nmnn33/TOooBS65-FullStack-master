import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
/* You can put any valid JavaScript expression inside the curly braces in JSX. Komponentti ja toiminnallisuus koodataan nimettynä funktiona tai anonyymina aukikirjoitetuna funktiona.
*/
const App = () => (
  <div className="App">
    <h1> Laurea FullStack 2022 React sovellus!</h1>

    <h2>It is {new Date().toLocaleTimeString()}.</h2>

    <Hello />
    <CustomHello
      author="Tuomas Holopainen"
      greeting="'Tere Moro Hei!'"
      color="blue" />
    <CustomHello
      author="Floor Jansen"
      greeting="'Goedemorgen!'"
      color="green"
    />
    <Elementti />
  </div>
);

/* Luodaan uusi Hello komponentti, jota kutsutaan edellä olevasta App komponentista */
const Hello = () => (
  <div>
    <p>おはよう世界</p>
  </div>
);

const CustomHello = (props) => {
  return (
    <div>
      <p className={props.color}>
        {props.greeting} (<strong> {props.author} </strong> )
      </p>
    </div>
  );
};

const user = {
  firstName: 'Night',
  lastName: 'wish',
  avatarUrl: 'https://global-uploads.webflow.com/5e5a76c9c9fe8458a78d93eb/61b101f9faea13371d108eb4_promo_group%20copysmall-p-500.png',
  linkki: "https://www.nightwish.com/"
};

/* const elementti = (
  <div>
    <h2>{user.firstName}   {user.lastName}</h2>
    <a href={user.linkki}><img src={user.avatarUrl} alt="Kuvalinkki rikki..." /></a>
  </div>
) */

const Elementti = () => {
  return (
    <div>
      <h2>{user.firstName}{user.lastName}</h2>
      <a href={user.linkki}><img src={user.avatarUrl} alt="Kuvalinkki rikki..." /></a>
    </div>
  );
};


export default App;
