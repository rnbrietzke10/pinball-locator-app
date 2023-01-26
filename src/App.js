import './App.css';
import Map from './Map';
import SearchForm from './SearchForm';
// Photo by <a href="https://unsplash.com/@kylejeffreys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Johnson</a> on <a href="https://unsplash.com/photos/7dy20Hc1wWE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <h1>Locate A Pinball Machine Near You!</h1>
      </header>
      <main>
        <SearchForm />
        <Map />
      </main>
    </div>
  );
}

export default App;
