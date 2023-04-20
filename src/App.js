import './App.css';
import ReactLogo from './Reactlogo/reactlogo'
import Button from './Button/buttton';
import ReactBenefits from './ReactBenifits/Benifits'


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
