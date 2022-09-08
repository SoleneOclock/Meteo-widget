import './App.scss';
import MeteoWidget from '../MeteoWidget';

function App() {
  return (
    <div className="App">
      <MeteoWidget code="05160" city="Savines-le-Lac" />
    </div>
  );
}

export default App;
