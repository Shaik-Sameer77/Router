import './App.css';
import ReactBenefits from './Benifits';
import Button from './buttton';
import ReactLogo from './reactlogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <ReactBenefits />
        <Button />

      </header>
    </div>
  );
}

export default App;
