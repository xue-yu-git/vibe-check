import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecommendationGrid from './components/RecommendationGrid';

function App() {
  // const = useState();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (vibe) => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vibe: vibe }),
      });
      const data = await response.json();
      setRecommendations(data.results ||);
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vibe Check 🎬🎮</h1>
        <p>Describe the movie or game you're in the mood for.</p>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <RecommendationGrid items={recommendations} loading={loading} />
      </main>
    </div>
  );
}

export default App;
