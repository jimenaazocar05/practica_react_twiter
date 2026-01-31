import './App.css'
import TwiterCard from './components/card/TwiterCard';

function App() {

  return (
    <div className="App">
      <TwiterCard
        name="John Doe" 
        username="johndoe"
      />

      <TwiterCard 
        name="Jane Smith" 
        username="janesmith"
      >
        children test
      </TwiterCard>

      <TwiterCard
        name="Jimena Azocar" 
        username="jimenaazocar_"
      />
    </div>
  )
}

export default App