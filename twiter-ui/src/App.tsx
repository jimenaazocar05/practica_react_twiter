import './App.css'
import TwiterCard from './components/card/TwiterCard';

function App() {

  return (
    <div className="App">
      <TwiterCard
        name="John Doe" 
        username="johndoe"
        isFollowing={false}
      />

      <TwiterCard 
        name="Jane Smith" 
        username="janesmith"
        isFollowing={true}
      >
        children test
      </TwiterCard>

      <TwiterCard
        name="Jimena Azocar" 
        username="jimenaazocar_"
        isFollowing={false}
      />
    </div>
  )
}

export default App